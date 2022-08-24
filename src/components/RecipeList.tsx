import * as React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import RecipeCard from "./recipe-card/RecipeCard";
import classes from "./recipe-card/RecipeCard.module.css";
import Pagination from "./pagination/Pagination";

const RecipeList: React.FC = () => {
  const [activePage, setActivePage] = React.useState(1);
  const { recipes } = useTypedSelector((state) => state.recipe);
  const countPages = Math.ceil(recipes.length / 4);

  return (
    <div className={classes.recipeListContainer}>
      <div className={classes.recipeCardContainer}>
        {recipes.slice((activePage - 1) * 4, activePage * 4).map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
      <Pagination
        activePage={activePage}
        countPages={countPages}
        changePage={setActivePage}
      />
    </div>
  );
};

export default RecipeList;
