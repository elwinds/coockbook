import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./CategoriesList.module.scss";

const CategoriesList = () => {
  const location = useLocation();
  const locationPath = location.pathname.split("/");

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
      <Link className={classes.categoriesList__link} to={"/"}>
        <div>All</div>
      </Link>
      {categories.map((item) => {
        return (
          <div
            key={item.idCategory}
            className={classes.oneCategoryItem}
          >
            <Link
              to={"/category/" + item.strCategory}
              className={
                locationPath[1] === "category" &&
                locationPath[2] === item.strCategory
                  ? [
                      classes.categoriesList__link,
                      classes["categoriesList__link--active"],
                    ].join(" ")
                  : classes.categoriesList__link
              }
            >
              {item.strCategory}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
