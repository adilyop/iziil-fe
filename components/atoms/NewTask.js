import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import axiosInstance from '../../services/httpInterceptor';

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function Tasklist(props) {
    const [showTaskModal, setshowTaskModal] = useState(false);
    const [tempNewTask, settempNewTask] = useState(props.tempNewTask || []);
    const [taskName, setTaskName] = useState(props.taskName || '');

    useEffect(() => {
        console.log('props ', props)
    }, [])
    function handleChangeShowTaskModal(value) {
        setshowTaskModal(value)
    }
    function tempAddNewTach() {
        const a = [...tempNewTask]
        a.push({})
        settempNewTask(a)
    }
    function tempRemoveNewTach(index) {
        const a = [...tempNewTask]
        a.splice(index, 1);
        settempNewTask(a)
    }

    function tempEditNewSubtaskTach(taskIndex, field, value) {
        const a = [...tempNewTask]
        a[taskIndex][field] = value;
        settempNewTask(a)
    }

    function addTask() {
        const dataToSend = {
            name: taskName,
            subTask: tempNewTask, // name start end status
            project: props.projectId
        }
        if (props.taskID) dataToSend._id = props.taskID;
        const url = `${API_URL}/tasks`
        axiosInstance.post(url, dataToSend).then(response => response.data)
            .then((result) => {
                props.handleChangeShowTaskModal(false)
            }
            );
    }
    return (
        <Fragment>

            <div id="defaultModal" tabIndex="-1" className="flex justify-center items-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-gray-200/50">
                <div className="relative  p-4 w-full max-w-2xl h-full md:h-4/5">
                    <div className="relative bg-white rounded-lg shadow bg-gray-700">
                        <div className="flex justify-between items-start p-4 rounded-t border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 text-white">
                                Ajouter une tache
                            </h3>
                            <button type="button" onClick={(e) => { handleChangeShowTaskModal(false) }} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only" >Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6 overflow-auto h-96">

                            <div className="mb-6 flex items-center">
                                <label className="w-24 mr-4 block mb-2 text-sm font-medium text-gray-500 text-gray-400">Nom</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required
                                    value={taskName}
                                    onChange={(e) => { setTaskName(e.target.value) }} />
                            </div>

                            <div onClick={() => tempAddNewTach()}>+ Ajouter une sous tache</div>
                            {
                                tempNewTask.map((item, index) => {
                                    return (
                                        <div className="bg-gray-800 px-8 pt-8 relative border border-gray-300">

                                            <button type="button" onClick={(e) => { tempRemoveNewTach(index) }} className="absolute top-1 right-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="defaultModal">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                <span className="sr-only" >Close modal</span>
                                            </button>
                                            <div className="mb-6 flex items-center">
                                                <label className="w-24 mr-4 block mb-2 text-sm font-medium text-gray-500 text-gray-400">Libelé</label>
                                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required
                                                    value={item.label}
                                                    onChange={(e) => { tempEditNewSubtaskTach(index, "label", e.target.value) }} />

                                                <label className="w-24 mr-4 block mb-2 text-sm font-medium text-gray-500 text-gray-400">Status</label>
                                                <select id="countries"
                                                    onChange={(e) => { tempEditNewSubtaskTach(index, "status", e.target.value) }}
                                                    value={item.status}
                                                    className="max-w-[100px] w-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value=""></option>
                                                    <option value="TODO">à Faire</option>
                                                    <option value="INPROGREE">En cours</option>
                                                    <option value="DONE">Terminé</option>
                                                    <option value="PENDING">Bloqué</option>
                                                </select>
                                            </div>

                                            <div className="mb-6 flex items-center">
                                                <label className="w-24 mr-4 block mb-2 text-sm font-medium text-gray-500 text-gray-400">Début</label>
                                                <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required
                                                    value={item.start}
                                                    onChange={(e) => { tempEditNewSubtaskTach(index, "start", e.target.value) }} />

                                                <label className="w-24 mr-4 block mb-2 text-sm font-medium text-gray-500 text-gray-400">Fin</label>
                                                <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required
                                                    value={item.end}
                                                    onChange={(e) => { tempEditNewSubtaskTach(index, "end", e.target.value) }} />
                                            </div>

                                            <div className="mb-6 flex items-center">
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="flex items-center p-6 space-x-2 rounded-b border-gray-200 border-gray-600">
                            <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" onClick={() => addTask()} >Confirmer</button>
                            <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
