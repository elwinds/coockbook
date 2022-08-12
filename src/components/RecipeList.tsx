import * as React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import RecipeCard from "./recipe-card/RecipeCard";
import classes from "./recipe-card/RecipeCard.module.css";

const RecipeList: React.FC = () => {
  const { recipes, loading, error } = useTypedSelector((state) => state.recipe);
  const { fetchRecipes, fetchCategories } = useActions();

  useEffect(() => {
    fetchCategories();
  }, []);

  //первый рендер компоненты
  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }
  if (error) {
    return <h1>Произошла ошибка {error}</h1>;
  }

  return (
    <div className={classes.recipeCardContainer}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
