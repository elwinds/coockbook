export interface CategoriesState {
    loading: boolean,
    categories: Category[],
    error: string | null,
}

export type Category = {
    idCategory: string,
    strCategory: string,
}

export enum CategoryActionTypes {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
}

interface FetchCategoriesAction {
    type: CategoryActionTypes.FETCH_CATEGORIES
}

interface FetchCategoriesSuccessAction {
    type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: any[]
}

interface FetchCategoriesErrorAction {
    type: CategoryActionTypes.FETCH_CATEGORIES_ERROR,
    payload: string,
}

export type CategoriesAction = FetchCategoriesAction | FetchCategoriesSuccessAction | FetchCategoriesErrorAction;