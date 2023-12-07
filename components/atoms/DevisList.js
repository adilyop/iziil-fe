import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import ModalDelete from "./ModalDelete"
import axiosInstance from '../../services/httpInterceptor'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function DevisList(props) {

    const [open, setOpen] = useState(0);
    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const [currentDevis, setCurrentDevis] = useState({});

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    function openDeleteModel(devis) {
        setshowDeleteModal(true)
        setCurrentDevis(devis)
    }
    function closeModal() {
        setshowDeleteModal(false)
    }
    function deleteDevis() {
        console.log('dddd ', currentDevis)
        const devisURL = `${API_URL}/devis`;
        const data = {
            _id: currentDevis._id,
            deleted: true
        }
        axiosInstance.post(devisURL, data).then(response => response.data)
            .then((result) => {
                closeModal()
            });
    }
    return (
        <Fragment>
            {
                props.devisList.map((devis, index) => {
                    return (
                        <Accordion open={open === index + 1}>
                            <AccordionHeader onClick={() => handleOpen(index + 1)} className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 border-gray-700 bg-gray-800 text-gray-900 text-white">
                                Devis {devis.code}
                            </AccordionHeader>
                            <AccordionBody className="p-5 font-light border border-b-0 border-gray-200 border-gray-700 bg-gray-900">
                                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                    <div className="ml-4">
                                        <label className="mr-4 block mb-2 text-xl font-medium text-gray-900 text-gray-300">Projet: {devis.project.project_name}</label>
                                        <label className="mr-4 block mb-1 text-sm font-medium text-gray-900 text-gray-400">Client: {devis.client} </label>
                                        <label className="mr-4 block mb-1 text-sm font-medium text-gray-900 text-gray-400 mb-8">{devis.adresse}  </label>
                                        <div className="relative mt-8 float-right">
                                            <button onClick={() => openDeleteModel(devis)} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="w-24 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button">
                                                Supprimer
                                            </button>
                                            <a href={"./devis/" + devis._id}>

                                                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="w-24 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button">
                                                    Detail
                                                </button>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </AccordionBody>
                        </Accordion>
                    )
                })
            }

            {showDeleteModal ?
                <ModalDelete deleteItem={() => deleteDevis()} closeModal={() => closeModal()} ></ModalDelete > : null}
        </Fragment>
    )

}
