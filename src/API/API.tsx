import axios from "axios";

const endpoints = {
  urlAllRecipes: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
  urlOneRecipeById: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=",
};

class RecipesApi {
    static async fetchAllRecipes() {
       const response = await axios.get(endpoints.urlAllRecipes);

       return response;
    };

    static async fetchOneRecipeById(id: string) {
        const response = await axios.get(endpoints.urlOneRecipeById + id);

        return response;
    }
};

export {RecipesApi};