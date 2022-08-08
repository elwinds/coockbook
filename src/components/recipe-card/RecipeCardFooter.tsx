import * as React from 'react';
import Button from '../UI/Button/Button';
import Favorite from '../UI/Favorite/Favorite';
import classes from "./RecipeCard.module.css";




const RecipeCardFooter = () => {
    return (
        <div className={classes.recipeCardFooter}>
            <Button
                buttonText='View full recipe'
                onClickHandler={() => {}}    
            />
            <Favorite/>
        </div>
    )
};

export default RecipeCardFooter;