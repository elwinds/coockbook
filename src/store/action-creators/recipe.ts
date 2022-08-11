import { Dispatch } from 'redux';
import { RecipeAction, RecipeActionTypes } from '../reducers/recipeReducer/recipeTypes';
import { RecipesApi } from '../../API/API';

export const fetchRecipes = () => {
    return async (dispatch: Dispatch<RecipeAction>) => {
        try {
            dispatch({type: RecipeActionTypes.FETCH_RECIPES});
            const response = await RecipesApi.fetchAllRecipes();
            dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: response.data.meals});
        } 
        catch(error) {
            dispatch({type: RecipeActionTypes.FETCH_RECIPES_ERROR, payload: 'Ошибка при загрузке рецептов'});
        }
    }
};

export const fetchOneRecipe = (id: string) => {
    return async (dispatch: Dispatch<RecipeAction>) => {
        try {
            dispatch({type: RecipeActionTypes.FETCH_RECIPES});
            const response = await RecipesApi.fetchOneRecipeById(id);
            dispatch({type: RecipeActionTypes.FETCH_RECIPES_SUCCESS, payload: response.data.meals});
        }
        catch(error) {
            dispatch({type: RecipeActionTypes.FETCH_RECIPES_ERROR, payload: 'Ошибка при загрузке рецепта'})
        }
    }
}