import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as RecipeActionCreators from "../store/action-creators/recipe";
import * as CategoriesActionCreators from '../store/action-creators/categories'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        {...RecipeActionCreators, ...CategoriesActionCreators} , 
        dispatch
    );
}