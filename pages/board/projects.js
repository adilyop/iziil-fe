import React, { useState, useEffect } from "react";
import HeaderComponent from '../../components/header/headerComponent.js'
import axiosInstance from '../../services/httpInterceptor'
import { useRouter } from 'next/router';
import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function BenifDashboard() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [showAccordion, setshowAccordion] = useState([{ open: false }]);
  const [projectList, setProjectList] = useState([]);

  const [projectName, setProjectName] = useState('');
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    getMyProject()
  }, []);


  function getMyProject() {
    const profilURL = `${API_URL}/projects`;
    axiosInstance.get(profilURL).then(response => response.data)
      .then((projectList) => {
        setProjectList(projectList)
      });
  }
  function addProject() {

    const profilURL = `${API_URL}/projects`;
    const data = {
      project_name: projectName,
    }
    axiosInstance.post(profilURL, data).then(response => response.data)
      .then((result) => {
        const projectId = result._id;
        setProjectName('');
        setShowModal(false);
        getMyProject();
      }
      );
  }
  function handleChange(value) {
    setShowModal(value)
  }

  function closeAccordion(index) {
    const list = showAccordion
    list[index].open = !list[index].open
    setshowAccordion(list)
  }
  return (
    <div className="h-screen">
      <HeaderComponent></HeaderComponent>
      <div className=" overflow-scroll h-[calc(100%+72px)]">
        <div className="p-8 bg-gray-200 text-gray-900 font-sans">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <button className="mb-4 float-right block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal"
                onClick={() => handleChange(true)}>
                Ajouter un Project
              </button>
              {
                projectList.map((project, index) => {
                  return (
                    <Fragment>
                      <Accordion open={open === index + 1}>
                        <AccordionHeader onClick={() => handleOpen(index + 1)} className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 border-gray-700 bg-gray-800 text-gray-900 text-white">
                          Project {project.project_name}
                        </AccordionHeader>
                        <AccordionBody className="p-5 font-light border border-b-0 border-gray-200 border-gray-700 bg-gray-900">
                          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                            <div className="ml-4">
                              <label className="mr-4 block mb-2 text-xl font-medium text-gray-900 text-gray-300">Projet: {project.project}</label>
                              <label className="mr-4 block mb-1 text-sm font-medium text-gray-900 text-gray-400">Client: {project.client} </label>
                              <label className="mr-4 block mb-1 text-sm font-medium text-gray-900 text-gray-400 mb-8">{project.adresse}  </label>
                              <div className="relative mt-8 float-right">
                                <a href={"./projects/" + project._id}>

                                  <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="w-24 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-gray-400 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" type="button">
                                    Detail
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </AccordionBody>
                      </Accordion>
                    </Fragment>
                  )
                })
              }
            </div>
          </div>
        </div>

        {showModal ?
          <div id="defaultModal" tabIndex="-1" className="flex justify-center items-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-gray-200/50">
            <div className="relative  p-4 w-full max-w-2xl h-full md:h-4/5">
              <div className="relative bg-white rounded-lg shadow bg-gray-700">
                <div className="flex justify-between items-start p-4 rounded-t border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 text-white">
                    Ajouter un Project
                  </h3>
                  <button type="button" onClick={(e) => { handleChange(false) }} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only" >Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6 overflow-auto h-96">

                  <div className="mb-6 flex items-center">
                    <label htmlFor="Code" className="w-24 mr-4 block mb-2 text-sm font-medium text-gray-500 text-gray-400">Nom</label>
                    <input type="text" id="Code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required
                      value={projectName}
                      onChange={(e) => { setProjectName(e.target.value) }} />
                  </div>

                </div>
                <div className="flex items-center p-6 space-x-2 rounded-b border-gray-200 border-gray-600">
                  <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" onClick={() => addProject()} >Confirmer</button>
                  <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">Annuler</button>
                </div>
              </div>
            </div>
          </div> : null}
      </div>
    </div>
  );
}