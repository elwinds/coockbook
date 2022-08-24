import * as React from "react";
import { Link } from "react-router-dom";
import classes from "./OneRecipe.module.css";

type Props = {
  recipeName: string;
  recipeCategory: string;
};

const OneRecipeHeader: React.FC<Props> = (props) => {
  const { recipeName, recipeCategory } = props;
  return (
    <div className={classes.oneRecipeHeader}>
      <div className={classes.oneRecipeHeaderName}>{recipeName}</div>
      <div className={classes.oneRecipeHeaderCategory}>
        <Link to={"/category/" + recipeCategory}>{recipeCategory}</Link>
      </div>
    </div>
  );
};

export default OneRecipeHeader;
