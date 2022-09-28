import * as React from 'react';
import { useLocation } from 'react-router-dom';
import classes from "./Banner.module.scss";


const Banner = () => {
  const location = useLocation();
  if(location.pathname !== '/') return null;

    return (
      <div className={classes.container}>
        <div className={classes.container__text}>
          <h1 className={classes.container__title}>
            WELCOME TO MY COOKBOOK PROJECT!
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab esse
            sunt ut animi rem maiores quibusdam neque quod vero explicabo,
            veniam nemo voluptates provident et quidem velit aperiam pariatur
            illo!
          </p>
        </div>
        <img
          className={classes.container__bcg}
          src={require("../../img/bcg-img.png")}
          alt="banner img"
        ></img>
      </div>
    );
};

export default Banner;