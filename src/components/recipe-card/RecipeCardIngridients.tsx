import * as React from "react";

type Props = {
  ingridients: string[];
};

const RecipeCardIngridients: React.FC<Props> = (props) => {
  const { ingridients } = props;

  return (
    <div>
      {ingridients.map((ingrItem, index) => (
        <div key={ingrItem + Date.now() + index}>{ingrItem}</div>
      ))}
    </div>
  );
};

export default RecipeCardIngridients;
