import * as React from 'react';
import classes from "./OneRecipe.module.css";



type Props = {
    ingridients: string[],
}

const OneRecipeIngridients: React.FC<Props> = (props) => {
    const {ingridients} = props;
    console.log(ingridients)
    return (
        <div className={classes.oneRecipeIngridients}>
            {ingridients.map((oneIng) => {
                return (
                  <div key={oneIng} className={classes.oneRecipeOneIng}>
                    {oneIng}
                  </div>
                );
            })}
        </div>
    )
};

export default OneRecipeIngridients;