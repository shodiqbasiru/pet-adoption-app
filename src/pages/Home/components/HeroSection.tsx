import React from 'react';
import Palm from '../../../assets/palm.svg';
import PalmReverse from '../../../assets/palm-reverse.svg';

const HeroSection = (): React.ReactElement => {
    return (
        <>
            <div
                className="min-h-screen flex flex-col lg:flex-row items-center gap-x-8 content-center bg-gradient-to-b from-orange-200 from-10% to-orange-100 to-90% px-4 lg:px-32 pt-24 lg:pt-0 relative z-10 overflow-hidden">
                <div className="flex flex-1 flex-col order-2 lg:order-1 text-center lg:text-start">
                    <h2 className="text-primary-100 font-bold capitalize">Welcome to PetHeaven</h2>
                    <h1 className="text-4xl lg:text-6xl font-bold uppercase">Find Your New Best Friend at <span
                        className="text-secondary">Pet</span><span className="text-primary-100">Heaven</span></h1>
                    <p className="text-lg lg:text-2xl mt-4">
                        A variety of pets are waiting for a loving home. Join us in giving a new life to animals in
                        need.
                    </p>
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 justify-center lg:justify-start">
                        <button
                            className="bg-primary-100 border-2 border-primary-100 hover:bg-transparent hover:border-2 hover:border-primary-100 hover:text-primary-100 text-white font-bold py-3.5 px-8 rounded-full mt-4 transition-all duration-300">
                            Our Services
                        </button>
                        <button
                            className="border-secondary border-2 text-secondary hover:bg-secondary hover:text-white font-bold py-3.5 px-8 rounded-full mt-4 transition-all duration-300">
                            Adopt Now
                        </button>
                    </div>
                </div>
                <div className="flex-1 order-1 lg:order-2">
                    <img src="https://storage.googleapis.com/petbacker/images/blog/2017/dog-and-cat-cover.jpg"
                         alt="Dog and Cat" className="w[650px] h[650px] mix-blend-darken"/>
                </div>

                {/*icons left side*/}
                <img src={Palm} alt="palm.svg" className="absolute top-64 -left-7 opacity-50 hidden lg:block"/>
                <img src={Palm} alt="palm.svg" className="absolute top-96 left-0 opacity-50 hidden lg:block"/>
                <img src={Palm} alt="palm.svg" className="absolute top-28 left-20 opacity-50 hidden lg:block"/>
                <img src={Palm} alt="palm.svg" className="absolute top-60 left-25 opacity-50 hidden lg:block"/>
                <img src={Palm} alt="palm.svg" className="absolute top-24 left-64 opacity-50 hidden lg:block"/>
                <img src={Palm} alt="palm.svg" className="absolute -top-10 left-56 opacity-50 hidden lg:block"/>

                {/*icons right side*/}
                <img src={PalmReverse} alt="palm.svg" className="absolute -bottom-28 -right-28 w-1/4 -z-20 opacity-50 hidden lg:block"/>
                {/*<img src={PalmReverse} alt="palm.svg" className="absolute bottom-72 right-0 w-1/4 -z-20 opacity-50"/>*/}
            </div>
        </>
    );
};

export default HeroSection;