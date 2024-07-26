import React, { useState, useEffect } from 'react';
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = (): React.ReactElement => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-20 top-0 start-0 transition-colors duration-300 ${isScrolled ? 'bg-orange-300' : 'md:bg-transparent bg-orange-300'}`}>
            <div className="flex flex-wrap items-center justify-between lg:mx-32 p-4">
                <span>
                    <a href="/" className="text-2xl font-bold uppercase"><span
                        className="text-secondary">Pet</span><span className="text-primary-100">Heaven</span></a>
                </span>
                <div className="flex md:order-2 space-x-3 md:space-x-0 ">
                    <div className="flex items-center space-x-4 md:space-x-8">
                        <span className="text-primary-100 text-2xl md:text-3xl font-medium">
                            <FaShoppingCart />
                        </span>
                        <span className="text-primary-100 text-2xl md:text-3xl font-medium">
                            <VscAccount />
                        </span>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg text-primary-100 md:hidden bg-secondary focus:outline-none"
                            aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 bg-orange-300 md:bg-transparent">
                        <li>
                            <a href="#"
                               className="block py-2 px-3 text-white bg-primary-100 rounded md:rounded-none md:bg-transparent md:text-primary-100 md:border-b-primary-100 md:border-b md:p-0"
                               aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 text-gray-900 rounded md:rounded-none hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-100 md:hover:border-b-primary-100 md:hover:border-b md:p-0">Shop</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 text-gray-900 rounded md:rounded-none hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-100 md:hover:border-b-primary-100 md:hover:border-b md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 text-gray-900 rounded md:rounded-none hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-100 md:hover:border-b-primary-100 md:hover:border-b md:p-0">Contact</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 text-gray-900 rounded md:rounded-none hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-100 md:hover:border-b-primary-100 md:hover:border-b md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;