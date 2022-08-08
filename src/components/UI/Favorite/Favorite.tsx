import * as React from "react";
import classes from './Favorite.module.css'

const Favorite = () => {
  return (
    <>
      <img className={classes.addFavoriteIcon}
        src={require("../../../img/icons/add_favorite.png")}
        alt="add to favorite"
      ></img>
    </>
  );
};

export default Favorite;
