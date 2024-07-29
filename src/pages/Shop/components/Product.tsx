import React from 'react';
import ProductGridView from "./ProductGridView";
import ProductListView from "./ProductListView";
import { BiGrid } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import useProduct from "../../../hook/useProduct";
import { IProduct } from "../../../constant/interfaceProduct";

const Product = ({ products }: { products: IProduct[] }): React.ReactElement => {
    const { data: { viewMode, animating }, method: { toggleViewMode } } = useProduct();

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex gap-x-2">
                    <BiGrid
                        className={`text-2xl cursor-pointer ${viewMode === 'grid' ? 'text-primary-100' : 'text-gray-500'}`}
                        onClick={() => toggleViewMode('grid')}
                    />
                    <BsViewList
                        className={`text-2xl cursor-pointer ${viewMode === 'list' ? 'text-primary-100' : 'text-gray-500'}`}
                        onClick={() => toggleViewMode('list')}
                    />
                    <p className="text-sm text-gray-500 lowercase">Showing 1-12 of 20 results</p>
                </div>
            </div>
            <hr className="my-5" />
            <div className={`transition-container ${animating ? 'fade-exit-active' : ''}`}>
                {viewMode === 'grid' ? (
                    <div
                        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 fade-enter ${animating ? 'fade-enter-active' : ''}`}>
                        {products.map((product) => (
                            <ProductGridView key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className={`fade-enter ${animating ? 'fade-enter-active' : ''}`}>
                        {products.map((product) => (
                            <ProductListView key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Product;