import * as React from 'react';
import classes from './RecipeCard.module.css';
import { Link } from "react-router-dom";


type Props = {
    recipeName: string,
    recipeCategory: string,
};

const RecipeCardHeader: React.FC<Props> = (props) => {
    return (
      <div className={classes.recipeCardHeader}>
        <div className={classes.recipeCardHeaderName}>{props.recipeName}</div>
        <div className={classes.recipeCardHeaderCategory}>
          <Link to={"/category/" + props.recipeCategory}>
            {props.recipeCategory}
          </Link>
        </div>
      </div>
    );
}

export default RecipeCardHeader;