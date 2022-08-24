export type Recipe = {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strMealThumb: string,
    strInstructions: string,
}

export interface RecipeState {
    recipes: Recipe[];
    loading: boolean;
    error: null | string;
};

export enum RecipeActionTypes {
    FETCH_RECIPES = 'FETCH_RECIPES',
    FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS',
    FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR',
    ADD_USER_RECIPE = 'ADD_USER_RECIPE',
};

interface FetchRecipesAction {
    type: RecipeActionTypes.FETCH_RECIPES;
};

interface FetchRecipesSuccessAction {
    type: RecipeActionTypes.FETCH_RECIPES_SUCCESS;
    payload: any[];
};

interface FetchRecipesErrorAction {
    type: RecipeActionTypes.FETCH_RECIPES_ERROR;
    payload: string;
};

interface AddUserRecipeAction {
    type: RecipeActionTypes.ADD_USER_RECIPE;
    payload: Recipe;
}

export type RecipeAction = FetchRecipesAction | FetchRecipesSuccessAction | FetchRecipesErrorAction | AddUserRecipeAction;
