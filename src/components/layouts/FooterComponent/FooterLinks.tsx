import React from 'react';

const FooterLinks = ():React.ReactElement => {
    return (
        <div className="flex flex-col justify-center md:justify-start mb-4">
            <a href="/shop" className="text-gray-200 hover:text-primary-100 px-4 py-2">
                Shop
            </a>
            <a href="/services" className="text-gray-200 hover:text-primary-100 px-4 py-2">
                Services
            </a>
            <a href="/about" className="text-gray-200 hover:text-primary-100 px-4 py-2">
                About Us
            </a>
            <a href="/contact" className="text-gray-200 hover:text-primary-100 px-4 py-2">
                Contact
            </a>
        </div>
    );
};

export default FooterLinks;