import {useEffect, useMemo, useState} from "react";
import {IProduct} from "../constant/interfaceProduct";
import {ICategory} from "../constant/interfaceCategory";
import CategoryService from "../service/CategoryService.ts";
import ProductService from "../service/ProductService.ts";

const useProduct = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [animating, setAnimating] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const toggleViewMode = (mode: 'grid' | 'list') => {
        if (viewMode !== mode) {
            setAnimating(true);
            setTimeout(() => {
                setViewMode(mode);
                setAnimating(false);
            }, 300);
        }
    };

    const filterProducts = useMemo(() => {
        if (selectedCategory !== null) {
            return products.filter((product) => {
                if(product.categoryId === selectedCategory)
                {
                    console.log(product)
                    return product;
                }
            });
        }
        return products;
    }, [products, selectedCategory]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await CategoryService().getCategories();
                setCategories(data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchCategories();

        const fetchProducts = async () => {
            try {
                const { data } = await ProductService().getProducts();
                setProducts(data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchProducts();
    }, [setCategories, setProducts]);


    return {
        data: { products: filterProducts, categories, viewMode, animating, selectedCategory},
        method: { toggleViewMode, setSelectedCategory },
    };
};

export default useProduct;