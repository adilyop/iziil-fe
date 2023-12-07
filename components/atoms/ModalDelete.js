import { Fragment } from "react";
import React, { useState, useEffect } from "react";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
export default function ModalDelete(props) {

    const [showDeleteModal, setshowDeleteModal] = useState(false);

    function openDeleteModel() {
        setshowDeleteModal(true)
    }
    function closeDeleteModal() {
        props.closeModal()
    }
    function DeleteItem() {
        console.log('props ', props)
        props.deleteItem()

    }
    return (
        <div id="defaultModal" tabIndex="-1" className="flex justify-center items-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-gray-200/50">
            <div className="relative  p-4 w-full max-w-2xl h-full md:h-4/5">
                <div className="relative bg-white rounded-lg shadow bg-gray-700">
                    <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 text-white">
                            Confirmation de suppression
                        </h3>
                    </div>
                    <div className="p-6 space-y-6 overflow-auto h-96">

                        Voulez vous supprimer cet item ?

                    </div>
                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 border-gray-600">
                        <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" onClick={() => DeleteItem()} >Confirmer</button>
                        <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600" onClick={() => closeDeleteModal(false)}>Annuler</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
