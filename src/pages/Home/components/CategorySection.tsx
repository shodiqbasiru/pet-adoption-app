import React from 'react';
import Palm from "../../../assets/palm.svg";

const CategorySection = ():React.ReactElement => {
    return (
        <div className="flex flex-col items-center mx-auto mt-20 py-24 relative overflow-hidden">
            <h1 className="text-4xl font-bold my-8">Top Categories</h1>

            <div className="flex flex-wrap justify-center gap-5 mt-8">
                <div className="flex flex-col">
                    <div className="bg-gray-100 p-5 rounded-2xl drop-shadow-sm shadow-primary-50 shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="" className="w-50 h-50 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-primary-200 font-bold text-center mt-3">Pets</h3>
                </div>
                <div className="flex flex-col">
                    <div className="bg-gray-100 p-5 rounded-2xl drop-shadow-sm shadow-primary-50 shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="" className="w-50 h-50 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-primary-200 font-bold text-center mt-3">Clothing</h3>
                </div>
                <div className="flex flex-col">
                    <div className="bg-gray-100 p-5 rounded-2xl drop-shadow-sm shadow-primary-50 shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="" className="w-50 h-50 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-primary-200 font-bold text-center mt-3">Food</h3>
                </div>
                <div className="flex flex-col">
                    <div className="bg-gray-100 p-5 rounded-2xl drop-shadow-sm shadow-primary-50 shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="" className="w-50 h-50 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-primary-200 font-bold text-center mt-3">Toys</h3>
                </div>
                <div className="flex flex-col">
                    <div className="bg-gray-100 p-5 rounded-2xl drop-shadow-sm shadow-primary-50 shadow-lg">
                        <img src="https://via.placeholder.com/150" alt="" className="w-50 h-50 rounded-full mx-auto"/>
                    </div>
                    <h3 className="text-primary-200 font-bold text-center mt-3">Pharmacy</h3>
                </div>
            </div>

            <img src={Palm} alt="palm.svg" className="absolute -bottom-40 -left-28 w-1/4 -z-20 opacity-50 hidden lg:block"/>

        </div>
    );
};

export default CategorySection;