import { CategoriesAction, CategoryActionTypes } from "../reducers/categoriesReducer/categoriesTypes";
import { Dispatch } from "redux";
import { RecipesApi } from '../../API/API';



export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoriesAction>) => {
        try {
            dispatch({type: CategoryActionTypes.FETCH_CATEGORIES})
            const response = await RecipesApi.fetchCategories();
            dispatch({type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS, payload: response.data.categories})
        }
        catch(error){
            dispatch({type: CategoryActionTypes.FETCH_CATEGORIES_ERROR, payload: 'Ошибка при загрузке категорий'})
        }
    }
}