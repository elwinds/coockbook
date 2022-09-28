import * as React from "react";
import classes from "./Navbar.module.scss";
import type { Recipe } from "../../store/reducers/recipeReducer/recipeTypes";
import { Link } from "react-router-dom";

interface Props {
  recipes: Recipe[];
  searchQuery(param: string): void;
}

const Dropdown: React.FC<Props> = (props) => {
  const { recipes, searchQuery } = props;

  const renderRecipes = () => {
    return recipes.map((recipe) => {
      return (
        <li className={classes.listDropdown__li} key={recipe.idMeal}>
          <Link className={classes.container__link}
            onClick={() => {
              searchQuery("");
            }}
            to={`/recipe/${recipe.idMeal}`}
          >
            {recipe.strMeal}
          </Link>
        </li>
      );
    });
  };

  return (
    <ul className={classes.listDropdown}>
      {recipes.length ? renderRecipes() : <h4>Not found recipes</h4>}
    </ul>
  );
};

export default Dropdown;
