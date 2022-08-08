import * as React from 'react';
import classes from './RecipeCard.module.css';

type Props = {
    recipeName: string,
    recipeCategory: string,
};

const RecipeCardHeader: React.FC<Props> = (props) => {
    return (
      <div className={classes.recipeCardHeader}>
        <div className={classes.recipeCardHeaderName}>
            {props.recipeName}
        </div>
        <div className={classes.recipeCardHeaderCategory}>
          {props.recipeCategory}
        </div>
      </div>
    );
}

export default RecipeCardHeader;