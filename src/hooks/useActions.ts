import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as RecipeActionCreators from "../store/action-creators/recipe";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(RecipeActionCreators, dispatch);
}