import { recipeReducer } from './recipeReducer/recipeReducer';
import { combineReducers } from "redux";
import { categoriesReducer } from './categoriesReducer/categoriesReducer';
import { userReducer } from './userReducer/userReducer';


export const rootReducer = combineReducers({
    recipe: recipeReducer,
    categories: categoriesReducer,
    userEmail: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>