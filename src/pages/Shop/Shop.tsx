import React, { useEffect, useState } from 'react';
import BannerShop from "./components/BannerShop.tsx";
import Category from "./components/Category.tsx";
import Product from "./components/Product.tsx";
import FilterShop from "./components/FilterShop.tsx";
import { BreadCrumb } from "primereact/breadcrumb";
import { MenuItem } from "primereact/menuitem";
import useProduct from '../../hook/useProduct.ts';

const Shop = (): React.ReactElement => {
    const { data: { products, categories, selectedCategory }, method: { setSelectedCategory, resetCategory } } = useProduct();
    const [breadcrumbItems, setBreadcrumbItems] = useState<MenuItem[]>([{ label: 'Shop', command: () => resetCategory() }]);

    useEffect(() => {
        if (selectedCategory) {
            const selectedCategoryName = categories.find(category => category.id === selectedCategory)?.name;
            setBreadcrumbItems([{ label: 'Shop', command: () => resetCategory() }, { label: selectedCategoryName }]);
        } else {
            setBreadcrumbItems([{ label: 'Shop', command: () => resetCategory() }]);
        }
    }, [selectedCategory, categories, resetCategory]);

    return (
        <>
            <div className="flex flex-col gap-x-8 content-center bg-gradient-to-b from-orange-200 from-10% to-orange-100 to-90% px-4 lg:px-32 relative z-10 overflow-hidden">
                <BannerShop />
            </div>
            <div className="mx-32 mt-8 p-4">
                <div className="flex justify-between">
                    <h3 className="text-3xl font-medium">List All Product</h3>
                    <div className="flex gap-x-2">
                        <input type="text" placeholder="Search" className="p-2 border border-gray-300 rounded-md" />
                        <button className="p-2 bg-primary-100 text-white rounded-md">Search</button>
                    </div>
                </div>
                {/* Breadcrumb */}
                <BreadCrumb model={breadcrumbItems} home={{ icon: 'pi pi-home', url: '/shop' }} unstyled={true} />
            </div>
            <div className="flex mx-32">
                <div className="w-1/4 p-4">
                    <Category categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                    <FilterShop />
                </div>
                <div className="flex-1 p-4">
                    <Product products={products} />
                </div>
            </div>
        </>
    );
};

export default Shop;