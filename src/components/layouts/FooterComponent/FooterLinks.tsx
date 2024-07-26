import React from 'react';

const FooterLinks = ():React.ReactElement => {
    return (
        <div
            className="flex text-start flex-col justify-start lg:justify-center mb-4">
            <a href="/shop" className="text-gray-200 hover:text-primary-100">
                Shop
            </a>
            <a href="/services" className="text-gray-200 hover:text-primary-100">
                Services
            </a>
            <a href="/about" className="text-gray-200 hover:text-primary-100">
                About Us
            </a>
            <a href="/contact" className="text-gray-200 hover:text-primary-100">
                Contact
            </a>
        </div>
    );
};

export default FooterLinks;