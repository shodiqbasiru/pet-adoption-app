import React from 'react';

const FooterContact = (): React.ReactElement => {
    return (
        <div className="text-center md:text-left mb-4">
            <p className="text-lg font-bold text-primary-900 uppercase">Contact Us</p>
            <p className="text-gray-200">
                Email: info@petpalsadoption.org
            </p>
            <p className="text-gray-200">
                Phone: (123) 456-7890
            </p>
            <p className="text-gray-200">
                Address: 123 Pet Lane, Cityville, Country
            </p>
        </div>
    );
};

export default FooterContact;