import * as React from "react";
import classes from "./Burger.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Burger = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const changeMenuState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className={classes.container}>
      <div className={classes.burger} onClick={() => changeMenuState()}>
        <img
          className={classes.burger__logo}
          src={
            isMenuOpen
              ? require("../../img/icons/cross.png")
              : require("../../img/icons/menu.png")
          }
          alt="categories menu"
        ></img>
        <span className={classes.burger__text}>Categories</span>
      </div>
      <div className={isMenuOpen? [classes.list, classes['list--open']].join(' ') : classes.list}>
        <Link className={classes.list__link} to={"/"}>
          <div>All</div>
        </Link>
        {categories.map((item) => {
          return (
            <div key={item.idCategory} className={classes.oneCategoryItem}>
              <Link
                to={"/category/" + item.strCategory}
                className={
                  locationPath[1] === "category" &&
                  locationPath[2] === item.strCategory
                    ? [
                        classes.list__link,
                        classes["list__link--active"],
                      ].join(" ")
                    : classes.list__link
                }
              >
                {item.strCategory}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Burger;
