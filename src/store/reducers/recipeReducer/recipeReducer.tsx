//тут происходит взаимодействие со списком рецептов
import { RecipeState, RecipeAction, RecipeActionTypes } from "./recipeTypes";

const initialState: RecipeState = {
    recipes: [],
    loading: false,
    error: null,
};

//принимает state и экшн
export const recipeReducer = (state = initialState, action: RecipeAction): RecipeState => {
    switch(action.type){
        case RecipeActionTypes.FETCH_RECIPES:
            return {loading: true, error: null, recipes: []};
        case RecipeActionTypes.FETCH_RECIPES_SUCCESS:
            return {recipes: action.payload, loading: false, error: null};
        case RecipeActionTypes.FETCH_RECIPES_ERROR:
            return {loading: false, error: action.payload, recipes: []};
        default: return state
    }
};
