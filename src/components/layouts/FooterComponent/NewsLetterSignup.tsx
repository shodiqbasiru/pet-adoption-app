import React from 'react';

const NewsLetterSignup = ():React.ReactElement => {
    return (
        <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-2 text-primary-900 uppercase">
                Subscribe to Our Newsletter
            </h4>
            <form className="flex flex-col md:flex-row items-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
                    required
                />
                <button
                    type="submit"
                    className="bg-primary-100 hover:bg-primary-200 text-white font-bold py-2 px-4 rounded-lg font-roboto transition duration-300"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default NewsLetterSignup;