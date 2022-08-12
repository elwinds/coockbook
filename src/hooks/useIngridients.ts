import type { Recipe } from '../store/reducers/recipeReducer/recipeTypes';
import * as React from 'react';



export const useIngridients = (recipe: Recipe, matchValue: string ) => {
    return React.useMemo(() => {
    return Object.keys(recipe)
      .filter((item) => item.match(matchValue))
      .map((recipeKeyValue) => {
        // @ts-ignore
        return recipe[recipeKeyValue];
      })
      .filter((ingridient) => !!ingridient && ingridient !== " ")
  }, [recipe, matchValue]);
}

