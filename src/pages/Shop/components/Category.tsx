import React from 'react';
import {MdPets} from "react-icons/md";
import {PiBowlFoodFill} from "react-icons/pi";
import {AiFillMedicineBox} from "react-icons/ai";
import {GiClothes, GiClothespin} from "react-icons/gi";
import {ICategory} from "../../../constant/interfaceCategory.ts";

const Category = ({categories,selectedCategory, setSelectedCategory}: {
    categories: ICategory[],
    selectedCategory: string | null,
    setSelectedCategory: (categoryId: string | null) => void
}): React.ReactElement => {


    return (
        <>
            <h3 className="text-3xl font-medium">Category</h3>
            <hr className="my-2"/>
            {categories.map(category => (
                <div
                    key={category.id}
                    className={`flex items-center gap-4 cursor-pointer mb-4 hover:bg-orange-300 p-2 rounded-md ${ selectedCategory === category.id ? 'bg-orange-300' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                >
                    {category.name === 'Pet' && <MdPets className="text-2xl text-primary-100"/>}
                    {category.name === 'Food' && <PiBowlFoodFill className="text-2xl text-primary-100"/>}
                    {category.name === 'Medicine' && <AiFillMedicineBox className="text-2xl text-primary-100"/>}
                    {category.name === 'Accessories' && <GiClothespin className="text-2xl text-primary-100"/>}
                    {category.name === 'Clothes' && <GiClothes className="text-2xl text-primary-100"/>}
                    <p>{category.name}</p>
                </div>
            ))}
        </>
    );
};

export default Category;