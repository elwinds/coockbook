import {
  CategoriesAction,
  CategoriesState,
  CategoryActionTypes,
} from "./categoriesTypes";

const initialState: CategoriesState = {
  loading: false,
  categories: [],
  error: null,
};

export const categoriesReducer = (
  state = initialState,
  action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES:
      return { loading: true, error: null, categories: [] };
    case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return { loading: false, error: null, categories: action.payload };
    case CategoryActionTypes.FETCH_CATEGORIES_ERROR:
      return { loading: false, error: action.payload, categories: [] };
    default:
      return state;
  }
};
