import * as React from 'react';
import classes from "./OneRecipe.module.css";

type Props = {
    recipeInstructions: string,
};

const OneRecipeInstruction: React.FC<Props> = (props) => {
    return (
        <div className={classes.oneRecipeInstruction}>
            {props.recipeInstructions}
        </div>
    )
}

export default OneRecipeInstruction;