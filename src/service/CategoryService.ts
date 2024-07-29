const CategoryService = () =>{
    const getCategories = async () => {
        const response = await fetch('src/api/category.json');
        return await response.json();
    };
    return { getCategories };
}

export default CategoryService;