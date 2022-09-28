import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import Favorite from "../UI/Favorite/Favorite";
import classes from "./RecipeCard.module.scss";

type Props = {
  recipeId: string;
};

const RecipeCardFooter: React.FC<Props> = (props) => {
  let navigate = useNavigate();

  const openRecipePage = () => {
    navigate(`/recipe/${props.recipeId}`);
  };

  return (
    <div className={classes.footer}>
      <Button
        buttonText="View full recipe"
        onClickHandler={() => {
          openRecipePage();
        }}
      />
      <Favorite idMeal={props.recipeId} />
    </div>
  );
};

export default RecipeCardFooter;
