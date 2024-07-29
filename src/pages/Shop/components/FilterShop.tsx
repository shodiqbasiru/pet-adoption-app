import React from 'react';

const FilterShop = ():React.ReactElement => {
    return (
        <div className="mt-5">
            <h3 className="text-3xl font-medium mt-5">Filter</h3>
            <hr className="my-2"/>

            <ul className="mt-2">
                <li className="py-2">
                    <h3 className="text-xl">Price</h3>
                    <input type="range" className="w-full"/>
                </li>
                <li className="py-2">
                    <h3 className="text-xl">Rating</h3>
                    <input type="range" className="w-full"/>
                </li>
            </ul>
        </div>
    );
};

export default FilterShop;