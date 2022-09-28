import * as React from 'react';
import classes from './RecipeCard.module.scss';
import { Link } from "react-router-dom";


type Props = {
    recipeName: string,
    recipeCategory: string,
};

const RecipeCardHeader: React.FC<Props> = (props) => {
    return (
      <div className={classes.header}>
        <div className={classes.name}>{props.recipeName}</div>
        <div className={classes.category}>
          <Link
            className={classes.category__link}
            to={"/category/" + props.recipeCategory}
          >
            {props.recipeCategory}
          </Link>
        </div>
      </div>
    );
}

export default RecipeCardHeader;