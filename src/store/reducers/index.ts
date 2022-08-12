import { recipeReducer } from './recipeReducer/recipeReducer';
import { combineReducers } from "redux";
import { categoriesReducer } from './categoriesReducer/categoriesReducer';


export const rootReducer = combineReducers({
    recipe: recipeReducer,
    categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>