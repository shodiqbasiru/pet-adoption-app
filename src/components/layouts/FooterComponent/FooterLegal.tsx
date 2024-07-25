import React from 'react';

const FooterLegal = ():React.ReactElement => {
    return (
        <div className="flex flex-col justify-center md:justify-start mb-4">
            <a href="/privacy" className="text-gray-200 hover:text-primary-100 px-4 py-2">
                Privacy Policy
            </a>
            <a href="/terms" className="text-gray-200 hover:text-primary-100 px-4 py-2">
                Terms of Service
            </a>
            <a href="/disclaimer" className="text-gray-200 hover:text-primary-100 px-4 py-2">
                Disclaimer
            </a>
        </div>
    );
};

export default FooterLegal;