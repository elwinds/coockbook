export type Recipe = {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strMealThumb: string,
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

export type RecipeAction = FetchRecipesAction | FetchRecipesSuccessAction | FetchRecipesErrorAction;
