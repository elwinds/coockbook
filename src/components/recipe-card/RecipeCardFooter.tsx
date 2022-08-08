import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Favorite from '../UI/Favorite/Favorite';
import classes from "./RecipeCard.module.css";

type Props = {
    recipeId: string,
};

const RecipeCardFooter: React.FC<Props> = (props) => {
    let navigate = useNavigate();

    const openRecipePage = () => {
        navigate(`/recipe/${props.recipeId}`)
    }

    return (
        <div className={classes.recipeCardFooter}>
            <Button
                buttonText='View full recipe'
                onClickHandler={() => {openRecipePage()}}    
            />
            <Favorite/>
        </div>
    )
};

export default RecipeCardFooter;