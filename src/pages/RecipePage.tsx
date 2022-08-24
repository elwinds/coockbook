import * as React from "react";
import { useParams } from "react-router-dom";
import OneRecipeContainer from "../components/one-recipe/OneRecipeContainer";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RecipePage = () => {
  const params = useParams();
  const { fetchOneRecipe } = useActions();

  const recipe = useTypedSelector((state) => {
    if (!state.recipe.recipes) {
      return null;
    }
    return state.recipe.recipes.filter(
      (recipe) => recipe.idMeal === params.recipeId
    )[0];
  });

  React.useEffect(() => {
    if (!recipe && params.recipeId) {
      fetchOneRecipe(params.recipeId);
    }
  }, []);

  if (!recipe) {
    return <p>Рецепт не найден</p>;
  }

  return <OneRecipeContainer recipe={recipe} />;
};

export default RecipePage;
