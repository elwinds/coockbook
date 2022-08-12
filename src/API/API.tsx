import axios from "axios";

const endpoints = {
  urlAllRecipes: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
  urlOneRecipeById: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=",
  urlCategories: "https://www.themealdb.com/api/json/v1/1/categories.php",
};

class RecipesApi {
  static async fetchAllRecipes() {
    const response = await axios.get(endpoints.urlAllRecipes);

    return response;
  }

  static async fetchOneRecipeById(id: string) {
    const response = await axios.get(endpoints.urlOneRecipeById + id);

    return response;
  }

  static async fetchCategories() {
    const response = await axios.get(endpoints.urlCategories);

    return response;
  }
}

export { RecipesApi };
