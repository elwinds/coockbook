import * as React from "react";
import { Recipe } from "../../store/reducers/recipeReducer/recipeTypes";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardImage from "./RecipeCardImage";
import RecipeCardIngridients from "./RecipeCardIngridients";
import classes from "./RecipeCard.module.scss";
import RecipeCardFooter from "./RecipeCardFooter";
import { useIngridients } from "../../hooks/useIngridients";

type Props = {
  recipe: Recipe;
};

const ingridientsValueToShow = 5;

export const RecipeCard: React.FC<Props> = (props) => {
  const { recipe } = props;
  const recipeIng = useIngridients(recipe, "strIngredient").slice(
    0,
    ingridientsValueToShow
  );

  return (
    <div className={classes.card}>
      <RecipeCardHeader
        recipeName={recipe.strMeal}
        recipeCategory={recipe.strCategory}
      />
      <RecipeCardImage
        recipeImage={recipe.strMealThumb}
        recipeName={recipe.strMeal}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "space-between",
          height: "100%",
          padding: "10px 0",
        }}
      >
        <RecipeCardIngridients ingridients={recipeIng} />
        <RecipeCardFooter recipeId={recipe.idMeal} />
      </div>
    </div>
  );
};

export default RecipeCard;
