import * as React from "react";
import { Recipe } from "../../store/reducers/recipeTypes";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardImage from "./RecipeCardImage";
import RecipeCardIngridients from "./RecipeCardIngridients";
import classes from "./RecipeCard.module.css";

type Props = {
  recipe: Recipe;
};

console.log(classes);

// const ingridientsValueToShow = 5;

export const RecipeCard: React.FC<Props> = (props) => {
  const { recipe } = props;

  const recipeIng = React.useMemo(() => {
    return Object.keys(recipe)
      .filter((item) => item.match("strIngredient"))
      .map((recipeKeyValue) => {
        // @ts-ignore
        return recipe[recipeKeyValue];
      })
      .filter((ingridient) => !!ingridient);
  }, [recipe]);

  return (
    <div>
      <RecipeCardHeader
        recipeName={recipe.strMeal}
        recipeCategory={recipe.strCategory}
      />
      <RecipeCardImage
        recipeImage={recipe.strMealThumb}
        recipeName={recipe.strMeal}
      />
      <RecipeCardIngridients ingridients={recipeIng} />
    </div>
  );
};

export default RecipeCard;
