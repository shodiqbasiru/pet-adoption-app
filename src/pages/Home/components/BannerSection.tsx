import React from 'react';

const BannerSection = ():React.ReactElement => {
    return (
        // <div className="flex flex-col items-center mx-auto mt-20 py-12 bg-gradient-to-tr  from-white from-50% to-primary-50">
        //     <img src="https://d.newsweek.com/en/full/1898130/dog-cat-under-sheet.jpg" alt="" className="w[400px] h-[300px] object-cover rounded-full"/>
        // </div>
        <div className="relative bg-gray-100 min-h-screen md:min-h-64">
            <img
                src="https://d.newsweek.com/en/full/1898130/dog-cat-under-sheet.jpg"
                alt="Happy pets waiting for adoption"
                className="w-full h-screen md:h-80 object-cover brightness-75"
                style={{ objectPosition: "50% 28%" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                <h1 className="text-5xl font-bold font-playfair mb-4">
                    Find Your <span className="text-primary-100">Furry</span> <span className="text-secondary">Friend</span> Today!
                </h1>
                <p className="text-xl font-opensans mb-8 max-w-2xl">
                    Join our mission to give every pet a loving family. Discover the perfect companion for your
                    lifestyle from our wide range of adorable pets waiting for a home.
                </p>
                <a
                    href="/adopt"
                    className="bg-primary-100 border-2 border-primary-100 hover:bg-transparent hover:border-2 hover:border-white hover:text-white text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300"
                >
                    Browse Pets
                </a>
            </div>
        </div>
    );
};

export default BannerSection;