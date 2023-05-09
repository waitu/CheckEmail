import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (  
    <nav className="bg-gray-900 border-gray-200">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <a href="#" className="flex items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/10270/10270940.png" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mail Checker</span>
            </a>
            <div className="flex items-center md:order-2">
                <a href="#" className="text-white font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">Login</a>
                <a href="#" className="text-white  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Sign up</a>
                <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                    <li>
                            <Link className='className="block py-2 pl-3 pr-4  border-b md:border-0 md:p-0 text-blue-500 md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700"' to="/">Home</Link>

                    </li>
                    <li>
                        <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">
                            Company <svg aria-hidden="true" className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <div id="mega-menu-dropdown" className="absolute z-10 hidden w-auto grid-cols-2 text-sm  border rounded-lg shadow-md border-gray-700 md:grid-cols-3 bg-gray-700">
                            <div className="p-4 pb-0 md:pb-4 text-white">
                                <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            Library
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            Resources
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            Pro Version
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4 pb-0  md:pb-4 text-white">
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            Newsletter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            Playground
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            License
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4">
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            Support Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" text-gray-400  hover:text-blue-500">
                                            Terms
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link  className="block py-2 pl-3 pr-4  border-b  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700" to="/check-proxys">Check Ip</Link>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 border-b   md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header