import React from 'react';
import {Rating} from "primereact/rating";
import {IProduct} from "../../../constant/interfaceProduct.ts";

const ProductListView = ({product}: { product: IProduct }): React.ReactElement => {
    return (
        <div
            className='flex flex-col xl:flex-row xl:align-items-start py-4 gap-4 border-b '>
            <img className="w-full sm:w-60 shadow-2 block border-round"
                 src={product.url} alt={product.name}/>
            <div
                className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                <div className="flex flex-col items-center sm:items-start gap-3">
                    <div className="text-2xl font-bold text-900">{product.name}</div>
                    <Rating value={product.rating} unstyled={true} readOnly cancel={false}></Rating>
                </div>
            </div>
        </div>
    );
};

export default ProductListView;