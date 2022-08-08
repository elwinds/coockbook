import * as React from "react";
import classes from "./Button.module.css";

type Props = {
  buttonText: string;
  onClickHandler(): void;
};

const Button: React.FC<Props> = (props) => {
  const { buttonText, onClickHandler } = props;
  return (
    <button className={classes.button} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};

export default Button;
