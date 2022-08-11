import * as React from 'react';
import { Recipe } from '../../store/reducers/recipeReducer/recipeTypes';
import OneRecipeHeader from './OneRecipeHeader';
import classes from "./OneRecipe.module.css";
import OneRecipeImage from './OneRecipeImage';
import OneRecipeInstruction from './OneRecipeInstruction';
import OneRecipeFooter from './OneRecipeFooter';
import OneRecipeIngridients from './OneRecipeIngridients';
import { useIngridients } from '../../hooks/useIngridients';


type Props = {
    recipe: Recipe;
}

const OneRecipeContainer: React.FC<Props> = (props) => {
    const {recipe} = props;
    const {strCategory, strInstructions, strMeal, strMealThumb} = recipe;

    const oneRecipeIngr = useIngridients(recipe, 'strIngredient');
    const oneRecipeMeasure = useIngridients(recipe, "strMeasure");

    const recipeIngridientsWithMeasure = React.useMemo(() => {
      return oneRecipeIngr
        .map((item, index) => {
          return [item, oneRecipeMeasure[index]];
        })
        .map((item) => {
          return item[0] + " " + item[1];
        });
    }, [oneRecipeIngr, oneRecipeMeasure]); 
 

    return (
      <div className={classes.oneRecipeContainer}>
        <OneRecipeHeader recipeName={strMeal} recipeCategory={strCategory} />
        <OneRecipeImage recipeImage={strMealThumb} recipeName={strMeal} />
        <OneRecipeIngridients ingridients={recipeIngridientsWithMeasure} />
        <OneRecipeInstruction recipeInstructions={strInstructions} />
        <OneRecipeFooter />
      </div>
    );
};

export default OneRecipeContainer