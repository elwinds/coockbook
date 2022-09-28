import * as React from "react";
import classes from "./Button.module.scss";

type Props = {
  buttonText: string;
  onClickHandler(): void;
};

const Button: React.FC<Props> = (props) => {
  const { buttonText, onClickHandler } = props;
  return (
    <button className={classes.btn} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};

export default Button;
