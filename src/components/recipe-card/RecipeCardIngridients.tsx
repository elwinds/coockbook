import * as React from "react";
import classes from "./RecipeCard.module.css";


type Props = {
  ingridients: string[];
};

const RecipeCardIngridients: React.FC<Props> = (props) => {
  const { ingridients } = props;

  return (
    <div className={classes.recipeCardIngridients}>
      {ingridients.map((ingrItem, index) => (
        <div
          className={classes.recipeCardOneIngridient}
          key={ingrItem + Date.now() + index}
        >
          {ingrItem}
        </div>
      ))}
    </div>
  );
};

export default RecipeCardIngridients;
