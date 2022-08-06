import axios from "axios";

const endpoints = {
    urlAllRecipes: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
};

class RecipesApi {
    static async fetchAllRecipes() {
       const response = await axios.get(endpoints.urlAllRecipes);

       return response;
    };
};

export {RecipesApi};