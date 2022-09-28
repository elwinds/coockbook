import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { UserActionTypes } from "../../store/reducers/userReducer/userTypes";
import Modal from "../modal/Modal";
import Favorites from "../favorites/Favorites";
import Button from "../UI/Button/Button";
import classes from "./Profile.module.scss";
import AddRecipeForm from "../add-recipe-form/AddRecipeForm";

const Profile = () => {
  const { email } = useTypedSelector((state) => state.userInfo);
  const { setIsAuth } = React.useContext(AppContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modal, setModal] = React.useState(false);

  const onClickLogoutButton = () => {
    if (setIsAuth) {
      setIsAuth(false);
    }
    dispatch({ type: UserActionTypes.CLEAR_USER_EMAIL });
    localStorage.removeItem("idToken");
    localStorage.removeItem("userEmail");
    navigate("../", { replace: true });
  };

  const onClickAddRecipeButton = () => {
    setModal(true);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.container__title}>USER INFO</h1>
      <hr className={classes.container__hr} />
      <div className={classes.container__info}>User: {email}</div>
      <Button
        buttonText={"Logout"}
        onClickHandler={onClickLogoutButton}
      ></Button>
      <hr className={classes.container__hr} />
      <Favorites />
      <hr className={classes.container__hr} />
      <Button
        buttonText={"Add new recipe"}
        onClickHandler={onClickAddRecipeButton}
      ></Button>
      <Modal visible={modal} setVisible={setModal}>
        <AddRecipeForm setVisible={setModal} />
      </Modal>
    </div>
  );
};

export default Profile;
