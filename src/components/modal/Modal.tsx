import * as React from "react";
import classes from "./Modal.module.scss";
import "./animation.scss";
import { Dispatch, SetStateAction } from "react";
import { CSSTransition } from "react-transition-group";

type Props = {
  children: JSX.Element;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Modal: React.FC<Props> = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.modal];
  if (visible) {
    rootClasses.push(classes['modal--active']);
  }

  return (
    <CSSTransition
      timeout={500}
      classNames="modalAnimation"
      addEndListener={() => {}}
      in={visible}
    >
      <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
        <div
          className={classes.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
