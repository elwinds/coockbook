import * as React from 'react';
import classes from "./OneRecipe.module.scss";



type Props = {
    ingridients: string[],
}

const OneRecipeIngridients: React.FC<Props> = (props) => {
    const {ingridients} = props;
    
    return (
        <div className={classes.ingridients}>
            {ingridients.map((oneIng) => {
                return (
                  <div key={oneIng} className={classes.ingridients__item}>
                    {oneIng}
                  </div>
                );
            })}
        </div>
    )
};

export default OneRecipeIngridients;