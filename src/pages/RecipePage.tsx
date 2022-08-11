import * as React from "react";
import { useParams } from "react-router-dom";
import OneRecipeContainer from "../components/one-recipe/OneRecipeContainer";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RecipePage = () => {
  const params = useParams();
  const { fetchOneRecipe } = useActions();

  const recipe = useTypedSelector((state) => {
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
    return null;
  }

  return (
    <div>
      <OneRecipeContainer recipe={recipe} />
    </div>
  );
};

export default RecipePage;
