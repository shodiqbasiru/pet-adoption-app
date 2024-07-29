const ProductService = () => {
    const getProducts = async () => {
        const response = await fetch('src/api/product.json');
        return await response.json();
    }

    return {
        getProducts
    }
}

export default ProductService;