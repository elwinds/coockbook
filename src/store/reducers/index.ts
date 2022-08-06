import { recipeReducer } from './recipeReducer';
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    recipe: recipeReducer,
});

export type RootState = ReturnType<typeof rootReducer>