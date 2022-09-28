import * as React from "react";
import classes from "./RecipeCard.module.scss";

type Props = {
  ingridients: string[];
};

const RecipeCardIngridients: React.FC<Props> = (props) => {
  const { ingridients } = props;

  return (
    <div className={classes.ingridients}>
      {ingridients.map((ingrItem, index) => (
        <div
          className={classes.ingridients__item}
          key={ingrItem + Date.now() + index}
        >
          {ingrItem}
        </div>
      ))}
    </div>
  );
};

export default RecipeCardIngridients;
