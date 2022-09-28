import * as React from 'react';
import classes from "./OneRecipe.module.scss";

type Props = {
    recipeInstructions: string,
};

const OneRecipeInstruction: React.FC<Props> = (props) => {
    return (
        <div className={classes.instruction}>
            {props.recipeInstructions}
        </div>
    )
}

export default OneRecipeInstruction;