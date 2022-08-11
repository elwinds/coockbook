import * as React from 'react';
import classes from "./OneRecipe.module.css";


type Props = {
  recipeImage: string;
  recipeName: string;
};

const OneRecipeImage: React.FC<Props> = (props) => {
      const { recipeImage, recipeName } = props;
    return (
      <div>
        <img
          className={classes.oneRecipeImage}
          src={recipeImage}
          alt={recipeName}
        />
      </div>
    );
}

export default OneRecipeImage;