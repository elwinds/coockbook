import * as React from "react";
import classes from "./RecipeCard.module.scss";

type Props = {
  recipeImage: string;
  recipeName: string;
};

const RecipeCardImage: React.FC<Props> = (props) => {
  const { recipeImage, recipeName } = props;

  return (
    <div>
      <img
        className={classes.img}
        src={recipeImage}
        alt={recipeName}
      />
    </div>
  );
};

export default RecipeCardImage;
