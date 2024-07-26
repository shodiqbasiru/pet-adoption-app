import React from 'react';
import {FaCat, FaDog} from "react-icons/fa6";
import {GiRabbit} from "react-icons/gi";

const ServiceSection = ():React.ReactElement => {
    return (
        <div className="flex flex-col items-center py-16 px-4 md:px-0">
            <span className="flex text-6xl text-primary-100 gap-x-4">
                <FaCat/>
                <FaDog/>
                <GiRabbit/>
            </span>
            <h1 className="text-4xl text-primary-900 font-bold my-8">Our Services</h1>

            <div className="flex flex-wrap justify-center gap-5 mt-8">
                <div className="flex flex-col">
                    <div className="bg-orange-100 p-5 rounded-3xl">
                        <img src="https://via.placeholder.com/150" alt="" className="w-80 h-80 md:w-20 md:h-20 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-sm font-bold text-center mt-3">Pet Grooming</h3>
                </div>
                <div className="flex flex-col">
                    <div className="bg-orange-100 p-5 rounded-3xl">
                        <img src="https://via.placeholder.com/150" alt="" className="w-80 h-80 md:w-20 md:h-20 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-sm font-bold text-center mt-3">Pet Grooming</h3>
                </div>
                <div className="flex flex-col">
                    <div className="bg-orange-100 p-5 rounded-3xl">
                        <img src="https://via.placeholder.com/150" alt="" className="w-80 h-80 md:w-20 md:h-20 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-sm font-bold text-center mt-3">Pet Grooming</h3>
                </div>
                <div className="flex flex-col">
                    <div className="bg-orange-100 p-5 rounded-3xl">
                        <img src="https://via.placeholder.com/150" alt="" className="w-80 h-80 md:w-20 md:h-20 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-sm font-bold text-center mt-3">Pet Grooming</h3>
                </div>
                <div className="flex flex-col">
                    <div className="bg-orange-100 p-5 rounded-3xl">
                        <img src="https://via.placeholder.com/150" alt="" className="w-80 h-80 md:w-20 md:h-20 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-sm font-bold text-center mt-3">Pet Grooming</h3>
                </div>
                <div className="flex flex-col">
                    <div className="bg-orange-100 p-5 rounded-3xl">
                        <img src="https://via.placeholder.com/150" alt="" className="w-80 h-80 md:w-20 md:h-20 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-sm font-bold text-center mt-3">Pet Grooming</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;