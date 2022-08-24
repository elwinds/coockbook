import * as React from "react";
import classes from "./Modal.module.css";
import { Dispatch, SetStateAction } from "react";

type Props = {
  children: JSX.Element;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Modal: React.FC<Props> = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.modal];
  if (visible) {
    rootClasses.push(classes.modal_active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
