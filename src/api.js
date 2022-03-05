import axios from "axios";

const getAllCatCategories = async ()=> {
    const response = await axios.get("https://api.thecatapi.com/v1/categories")
    return response
}

const getCatCategoriesById = async (id)=> {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=" + id)
    return response
}

export {getAllCatCategories, getCatCategoriesById}