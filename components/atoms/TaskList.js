import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import GanttExample from "./Gantt"
import ModalDelete from "./ModalDelete"
import NewTask from "./NewTask"
import axiosInstance from '../../services/httpInterceptor';

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function Tasklist(props) {
    const [open, setOpen] = useState(0);
    const [showTaskModal, setshowTaskModal] = useState(false);

    const [tempNewTask, settempNewTask] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskID, setTaskID] = useState('');
    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const [currentCommande, setCurrentCommande] = useState({});
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    function handleChangeShowTaskModal(value) {
        setshowTaskModal(value)
    }
    function openDeleteModel(commande) {
        setshowDeleteModal(true)
        setCurrentCommande(commande)
    }
    function closeModal() {
        setshowDeleteModal(false)
    }

    function deleteCommande() {
        const devisURL = `${API_URL}/tasks`;
        const data = {
            _id: currentCommande._id,
            deleted: true
        }
        axiosInstance.post(devisURL, data).then(response => response.data)
            .then((result) => {
                closeModal()
            });
    }

    function addTask(task) {
        console.log("setTaskName ", task)
        setTaskID(task._id)
        setTaskName(task.name)
        settempNewTask(task.subTask)
        handleChangeShowTaskModal(true)
    }
    return (
        <Fragment>
            {
                props.taskList.map((task, index) => {
                    return (
                        <Fragment>
                            <Accordion open={open === index + 1}>
                                <AccordionHeader onClick={() => handleOpen(index + 1)} className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 border-gray-700 bg-gray-800 text-gray-900 text-white">
                                    Task {task.name}
                                </AccordionHeader>
                                <AccordionBody className="p-5 font-light border border-b-0 border-gray-200 border-gray-700 bg-gray-900">
                                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <div className="ml-4">
                                            {
                                                task.subTask && task.subTask.map(subTask => {
                                                    return (

                                                        <Fragment>
                                                            <label className="mr-4 block mb-2 text-xl font-medium text-gray-900 text-gray-300">Sous tache: {subTask.label} </label>
                                                            <label className="mr-4 block mb-2 text-m text-gray-900 text-gray-300">Debut: {subTask.start} </label>
                                                            <label className="mr-4 block mb-2 text-m text-gray-900 text-gray-300">Fin: {subTask.end} </label>
                                                            <label className="mr-4 block mb-2 text-m text-gray-900 text-gray-300">statut: {subTask.status} </label>
                                                        </Fragment>
                                                    )
                                                })

                                            }
                                        </div>
                                        <div className="relative float-right">
                                            <div>

                                                <button onClick={() => addTask(task)} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="w-24 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button">
                                                    Modifier
                                                </button>
                                                <button onClick={() => openDeleteModel(task)} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="w-24 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button">
                                                    Supprimer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionBody>
                            </Accordion>
                        </Fragment>
                    )
                })
            }

            {showTaskModal && <NewTask
                projectId={props.projectId}
                taskName={taskName}
                tempNewTask={tempNewTask}
                taskID={taskID}
                handleChangeShowTaskModal={handleChangeShowTaskModal}
            ></NewTask>}
            {showDeleteModal ?
                <ModalDelete deleteItem={() => deleteCommande()} closeModal={() => closeModal()} ></ModalDelete > : null}

            <div className="w-full">
                <GanttExample taskList={props.taskList}></GanttExample>
            </div>
        </Fragment>
    )

}
