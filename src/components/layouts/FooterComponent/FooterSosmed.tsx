import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6";

const FooterSosmed = ():React.ReactElement => {
    return (
        <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a href="https://facebook.com/petpalsadoption" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-primary-100 text-4xl hover:text-primary-200 transition duration-300"/>
            </a>
            <a href="https://twitter.com/petpalsadoption" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-primary-100 text-4xl hover:text-primary-200 transition duration-300"/>
            </a>
            <a href="https://instagram.com/petpalsadoption" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-primary-100 text-4xl hover:text-primary-200 transition duration-300"/>
            </a>
        </div>
    );
};

export default FooterSosmed;