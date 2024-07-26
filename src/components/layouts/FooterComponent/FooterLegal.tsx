import React from 'react';

const FooterLegal = ():React.ReactElement => {
    return (
        <div
            className="flex text-start flex-col justify-start lg:justify-center mb-4">
            <a href="/privacy" className="text-gray-200 hover:text-primary-100">
                Privacy
            </a>
            <a href="/terms" className="text-gray-200 hover:text-primary-100">
                Terms of Service
            </a>
            <a href="/disclaimer" className="text-gray-200 hover:text-primary-100">
                Disclaimer
            </a>
        </div>
    );
};

export default FooterLegal;