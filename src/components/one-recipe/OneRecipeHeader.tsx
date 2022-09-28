import * as React from "react";
import { Link } from "react-router-dom";
import classes from "./OneRecipe.module.scss";

type Props = {
  recipeName: string;
  recipeCategory: string;
};

const OneRecipeHeader: React.FC<Props> = (props) => {
  const { recipeName, recipeCategory } = props;
  return (
    <div className={classes.header}>
      <div className={classes.name}>{recipeName}</div>
      <div className={classes.category}>
        <Link className={classes.category__link} to={"/category/" + recipeCategory}>{recipeCategory}</Link>
      </div>
    </div>
  );
};

export default OneRecipeHeader;
