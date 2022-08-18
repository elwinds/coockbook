import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Favorites from '../favorites/Favorites';
import Button from '../UI/Button/Button';
import classes from "./Profile.module.css";


const Profile = () => {
    const {email} = useTypedSelector((state) => state.userEmail)
    const { setIsAuth } = React.useContext(AppContext);
    const navigate = useNavigate();

    const onClickLogoutButton = () => {
        if(setIsAuth){
            setIsAuth(false)
        };
        localStorage.removeItem('idToken');
        navigate("../", { replace: true });
    }

    const onClickAddRecipeButton = () => {

    }

    return (
      <div className={classes.profilePage}>
        <h1>USER INFO</h1>
        <hr />
        <div className={classes.userInfo}>User: {email}</div>
        <Button
          buttonText={"Logout"}
          onClickHandler={onClickLogoutButton}
        ></Button>
        <hr />
        <Favorites />
        <hr />
        <Button
          buttonText={"Add new recipe"}
          onClickHandler={onClickAddRecipeButton}
        ></Button>
      </div>
    );
}

export default Profile;