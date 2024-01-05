import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import { HeaderComponent } from "../components/header/headerComponent";
import ReactComponent from "react";
import Image from 'next/image'


// import welcomeImage from '../../assets/images/template.jpg';

export default function HomePage() {
  return (
    <DefaultTemplate>
      <HeaderComponent></HeaderComponent>
      <div className="mt-12 text-base	 xl:text-4xl text-black text-center font-medium ">Selectionner l'offre qui vous convient </div>
      <div className="mt-2 text-xs xl:text-base	 text-center text-blue-700">Contactez nous pour plus d'informations</div>
      <div className="bg-white grid-cols-3 max-w-none gap-6 items-start ml-auto mr-auto  p-16 md:grid">

        <div className="h-full mb-8">

          <div className="p-6 border rounded-lg flex-col h-full flex relative bg-gray-50 border-2	border-gray-100">
            {/* header */}
            <div className="mb-4 ">
              <div className="text-black font-semibold text-lg leading-normal mb-1">Essential</div>
              <div className="items-baseline inline-flex mb-2">
                <span className="text-gray-800 text-2xl">$</span>
                <span className="text-gray-800 text-3xl font-bold">5</span>
                <span className="text-gray-600">/mo</span>
              </div>
              <div className="text-gray-500">Installation sur une machine en local, la solution sera accessible en localhost.</div>
            </div>
            {/* body */}
            <div className="flex-grow">
              <div className="font-medium text-sm mb-4 text-gray-900">include</div>
              <ul className="text-sm flex-grow m-0 p-0">
                <li className="items-center flex text-gray-600 my-1">
                  <svg className="flex-shrink-0 w-3 h-3 mr-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="#10b981">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  Instalation de la solution dans un poste de votre choix
                </li>

                <li className="items-center flex text-gray-600 my-1">
                  <svg className="flex-shrink-0 w-3 h-3 mr-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="#10b981">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  Creation et configuration du compte Admin
                </li>
              </ul>
            </div>
            {/* footer */}
            <div className="mt-8">
              <button type="button" className="justify-center w-full h-10 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 bg-black text-white" aria-controls="navbar-default" aria-expanded="false">
                <span>Open main menu</span>
              </button>
            </div>
          </div>
        </div>


        <div className="h-full  mb-8">

          <div className="p-6 border rounded-lg flex-col h-full flex relative bg-gray-900 border-2	border-gray-100">
            {/* header */}
            <div className="mb-4 ">
              <div className="text-white font-semibold text-lg leading-normal mb-1">Premium</div>
              <div className="items-baseline inline-flex mb-2">
                <span className="text-gray-200 text-2xl">$</span>
                <span className="text-gray-100 text-3xl font-bold">15</span>
                <span className="text-gray-200">/mo</span>
              </div>
              <div className="text-gray-500">For power users who want access to creative features.</div>
            </div>
            {/* body */}
            <div className="flex-grow">
              <div className="font-medium text-sm mb-4 text-gray-300">include</div>
              <ul className="text-sm flex-grow m-0 p-0">
                <li className="items-center flex text-gray-500 my-1">
                  <svg className="flex-shrink-0 w-3 h-3 mr-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="#10b981">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  Unlimited workspace boards
                </li>

                <li className="items-center flex text-gray-500 my-1">
                  <svg className="flex-shrink-0 w-3 h-3 mr-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="#10b981">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  Unlimited workspace boards
                </li>
              </ul>
            </div>
            {/* footer */}
            <div className="mt-8">
              <button type="button" className="justify-center w-full h-10 inline-flex items-center p-2 ml-3 text-sm rounded-lg  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-300 focus:ring-gray-600 bg-gray-200 text-gray-900" aria-controls="navbar-default" aria-expanded="false">
                <span>Open main menu</span>
              </button>
            </div>
          </div>
        </div>


        <div className="h-full  mb-8">

          <div className="p-6 border rounded-lg flex-col h-full flex relative bg-gray-50 border-2	border-gray-100">
            {/* header */}
            <div className="mb-4 ">
              <div className="text-black font-semibold text-lg leading-normal mb-1">Enterprise</div>
              <div className="items-baseline inline-flex mb-2">
                <span className="text-gray-800 text-2xl">$</span>
                <span className="text-gray-800 text-3xl font-bold">50</span>
                <span className="text-gray-600">/mo</span>
              </div>
              <div className="text-gray-500">Installation de la solution pour les client de cpanel.</div>
            </div>
            {/* body */}
            <div className="flex-grow">
              <div className="font-medium text-sm mb-4 text-gray-900">include</div>
              <ul className="text-sm flex-grow m-0 p-0">
                <li className="items-center flex text-gray-600 my-1">
                  <svg className="flex-shrink-0 w-3 h-3 mr-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="#10b981">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  Instalation de la solution dans vore Cpanel
                </li>

                <li className="items-center flex text-gray-600 my-1">
                  <svg className="flex-shrink-0 w-3 h-3 mr-3" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="#10b981">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                  </svg>
                  Creation du subdomain de votre domain et liaison de l'application avec le domain
                </li>
              </ul>
            </div>
            {/* footer */}
            <div className="mt-8">
              <button type="button" className="justify-center w-full h-10 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 bg-black text-white" aria-controls="navbar-default" aria-expanded="false">
                <span>Open main menu</span>
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-white py-8 text-center text-gray-500">

        iZiil.com All rights reserved 2024
      </div>
    </DefaultTemplate>
  );
}
