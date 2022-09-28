import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { UserActionTypes } from "../../../store/reducers/userReducer/userTypes";
import classes from "./Favorite.module.scss";

type Props = {
  idMeal: string;
};

const Favorite: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { isAuth } = React.useContext(AppContext);
  const navigate = useNavigate();

  const favIcon = require("../../../img/icons/add_favorite.png");
  const favIconClicked = require("../../../img/icons/like_favorite.png");

  const addedFavoriteRecipes = useTypedSelector(
    (state) => state.userInfo.favorites
  );
  const isRecipeAdded = addedFavoriteRecipes.includes(props.idMeal);

  const handleFavoriteClick = () => {
    if (isAuth) {
      if (!isRecipeAdded) {
        dispatch({
          type: UserActionTypes.SET_FAVORITE_ID,
          payload: props.idMeal,
        });
      } else {
        dispatch({
          type: UserActionTypes.DELETE_FAVORITE_ID,
          payload: props.idMeal,
        });
      }
    } else navigate("/auth", { replace: true });
  };

  return (
    <img
      className={classes.addFavoriteIcon}
      onClick={handleFavoriteClick}
      src={isRecipeAdded ? favIconClicked : favIcon}
      alt="add to favorite"
    />
  );
};

export default Favorite;
