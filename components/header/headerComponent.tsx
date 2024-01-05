import React, { useState, useEffect } from "react";

// import "./HeaderComponent.scss";
import { useRouter } from 'next/router'
export function HeaderComponent() {
  const { asPath, pathname } = useRouter();

  const [expanded, setexpanded] = useState(false);
  const [tabSelected, settabSelected] = useState('Home');

  useEffect(() => {
    settabSelected(pathname)
  })

  function openNavBar() {
    setexpanded(!expanded);
  }

  return (
    <div className="w-screen">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center">
            <svg width="30px" height="30px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >
              <g id="Layer_2" />
              <g id="Layer_3" />
              <g id="Layer_4" />
              <g id="Layer_5" />
              <g id="Layer_6" />
              <g id="Layer_7" />
              <g id="Layer_8" />
              <g id="Layer_9" />
              <g id="Layer_10" />
              <g id="Layer_11" />
              <g id="Layer_12" />
              <g id="Layer_13" />
              <g id="Layer_14" />
              <g id="Layer_15" />
              <g id="Layer_16" />
              <g id="Layer_17" />
              <g id="Layer_18" />
              <g id="Layer_19" />
              <g id="Layer_20" />
              <g id="Layer_21" />
              <g id="Layer_22" />
              <g id="Layer_23" />
              <g id="Layer_24" />
              <g id="Layer_25" />
              <g id="Layer_26" />
              <g id="Layer_27" />
              <g id="Layer_28" />
              <g id="Layer_29" />
              <g id="Layer_30" />
              <g id="Layer_31">
                <path d="M24,28c0,0.55-0.45,1-1,1h-0.98c-0.01,0-0.01,0-0.02,0H9c-0.55,0-1-0.45-1-1s0.45-1,1-1h0.7   c1.32-0.84,2.3-2.93,2.3-5c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1c0,2.07,0.97,4.16,2.29,5H23C23.55,27,24,27.45,24,28z" fill="#96CEE5" />
                <g>
                  <path d="M31,6v10c0,0.55-0.45,1-1,1H2c-0.55,0-1-0.45-1-1V6c0-1.65,1.35-3,3-3h24C29.65,3,31,4.35,31,6z" fill="#96CEE5" />
                </g>
                <g>
                  <path d="M31,15v5c0,1.65-1.35,3-3,3H4c-1.65,0-3-1.35-3-3v-5H31z" fill="#48B1DD" />
                </g>
                <g>
                  <path d="M18,20h-4c-0.5522,0-1-0.4478-1-1s0.4478-1,1-1h4c0.5522,0,1,0.4478,1,1S18.5522,20,18,20z" fill="#4391B2" />
                </g>
              </g>
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-[#96CEE5] tracking-widest	">&nbsp;{'iZiil'}</span>
          </a>

          <button onClick={() => openNavBar()} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`w-full md:block md:w-auto ` + (expanded ? 'block' : 'hidden')} id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <a href="./" className={`block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent ` + (tabSelected == "/" ? 'md:text-blue-700' : 'md:text-gray-500')} aria-current="page">Home</a>
              </li>
              <li>
                <a href="./Pricing" className={`block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent ` + (tabSelected == "/Pricing" ? 'md:text-blue-700' : 'md:text-gray-500')}>Pricing</a>
              </li>
              <li>
                <a href="./Contact" className={`block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent ` + (tabSelected == "/Contact" ? 'md:text-blue-700' : 'md:text-gray-500')}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}