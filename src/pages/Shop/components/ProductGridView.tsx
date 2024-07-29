import React from 'react';
import {Rating} from "primereact/rating";
import {IProduct} from "../../../constant/interfaceProduct.ts";

const ProductGridView = ({product}: { product: IProduct }): React.ReactElement => {
    return (
            <div className="rounded-lg shadow-lg overflow-hidden">
                <img src={product.url} alt={product.name} className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h3 className="text-primary-100 font-bold text-xl">Rp. {product.price}</h3>
                    <p className="text-gray-500 mb-2">{product.store}</p>
                    <p>{product.name}</p>
                    <Rating
                        value={product.rating}
                        readOnly
                        unstyled={true}
                        cancel={false}/>
                </div>
            </div>
    );
};

export default ProductGridView;