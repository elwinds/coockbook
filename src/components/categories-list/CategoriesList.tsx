import * as React from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./CategoriesList.module.css";

const CategoriesList = () => {
  const { categories, loading, error } = useTypedSelector(
    (state) => state.categories
  );

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>Произошла ошибка {error}</h1>;
  }

  return (
    <div className={classes.categoriesList}>
      <Link to={"/"}>
        <div>All</div>
      </Link>
      {categories.map((item) => {
        return (
          <div key={item.idCategory} className={classes.oneCategoryItem}>
            <Link to={"/category/" + item.strCategory}>{item.strCategory}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
