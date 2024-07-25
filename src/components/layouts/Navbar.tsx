import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import {VscAccount} from "react-icons/vsc";

const Navbar = (): React.ReactElement => {
    return (
        <nav className="flex justify-between mx-32 py-6 relative z-20">
            <h1>
                <a href="/" className="text-2xl font-bold uppercase"><span className="text-secondary">Pet</span><span className="text-primary-100">Heaven</span></a>
            </h1>
            <ul className="flex space-x-4 uppercase">
                <li>
                    <a href="/" className="font-medium text-xl hover:border-primary-100 hover:border-b hover:text-primary-100">Home</a>
                </li>
                <li>
                    <a href="/shop" className="font-medium text-xl hover:border-primary-100 hover:border-b hover:text-primary-100">Shop</a>
                </li>
                <li>
                    <a href="/services" className="font-medium text-xl hover:border-primary-100 hover:border-b hover:text-primary-100">Services</a>
                </li>
                <li>
                    <a href="/about" className="font-medium text-xl hover:border-primary-100 hover:border-b hover:text-primary-100">About</a>
                </li>
                <li>
                    <a href="/contact" className="font-medium text-xl hover:border-primary-100 hover:border-b hover:text-primary-100">Contact</a>
                </li>
            </ul>
            <div className="flex space-x-8">
                <span className="text-primary-100 text-3xl font-medium">
                    <FaShoppingCart/>
                </span>
                <span className="text-primary-100 text-3xl font-medium">
                    <VscAccount/>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;