import * as React from "react";
import { DotSpinner } from "@uiball/loaders";
import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <DotSpinner size={100} speed={0.9} color="black" />
    </div>
  );
};

export { Loader };
