import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import DisplayFile from './DisplayFile';

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import ModalDelete from "./ModalDelete"
import axiosInstance from '../../services/httpInterceptor';

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function PurchaseList(props) {

    const [open, setOpen] = useState(0);

    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const [currentCommande, setCurrentCommande] = useState({});
    const [fileJson, setFileJson] = useState('');
    const [isFileOpen, setIsFileOpen] = useState(false);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    function downloadFile(file) {
        console.log('file ', file)
        setFileJson(file)
        setIsFileOpen(true)
    }

    function onChangeFile(value) {
        setIsFileOpen(false)
    }
    function openDeleteModel(commande) {
        setshowDeleteModal(true)
        setCurrentCommande(commande)
    }
    function closeModal() {
        setshowDeleteModal(false)
    }

    function deleteCommande() {
        const devisURL = `${API_URL}/purchases`;
        const data = {
            _id: currentCommande._id,
            deleted: true
        }
        axiosInstance.post(devisURL, data).then(response => response.data)
            .then((result) => {
                closeModal()
            });
    }
    return (
        <Fragment>
            <div>
                {
                    isFileOpen && fileJson.file ?
                        <DisplayFile
                            onChangeFile={onChangeFile}
                            isOpen={isFileOpen}
                            fileJson={fileJson.file}
                        ></DisplayFile>
                        : null
                }
            </div>
            {
                props.purchaseList.map((purchase, index) => {
                    return (
                        <Fragment>
                            <Accordion open={open === index + 1}>
                                <AccordionHeader onClick={() => handleOpen(index + 1)} className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 border-gray-700 bg-gray-800 text-gray-900 text-white">
                                    purchase {purchase.value}
                                </AccordionHeader>
                                <AccordionBody className="p-5 font-light border border-b-0 border-gray-200 border-gray-700 bg-gray-900">
                                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <div className="ml-4">
                                            <label className="mr-4 block mb-2 text-xl font-medium text-gray-900 text-gray-300">Facture: {purchase.facture.code}</label>
                                            <label className="mr-4 block mb-1 text-sm font-medium text-gray-900 text-gray-400">Montant:  {purchase.value}</label>

                                            <div className="relative mt-8 float-right">
                                                <div>

                                                    <button onClick={() => openDeleteModel(purchase)} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="w-24 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button">
                                                        Supprimer
                                                    </button>
                                                    <button onClick={() => downloadFile(purchase)} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="w-24 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button">
                                                        Visualiser
                                                    </button>

                                                    <button onClick={() => downloadFile(purchase)} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="w-24 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button">
                                                        Télécharger
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionBody>
                            </Accordion>
                        </Fragment>
                    )
                })
            }
            {showDeleteModal ?
                <ModalDelete deleteItem={() => deleteCommande()} closeModal={() => closeModal()} ></ModalDelete > : null}

        </Fragment>
    )

}
