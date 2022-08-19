import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import Favorite from '../UI/Favorite/Favorite';
import classes from "./OneRecipe.module.css";


const OneRecipeFooter: React.FC = () => {
    const navigate = useNavigate();

    const openAllRecipesPage = () => {
        navigate('/')
    }

    return (
      <div className={classes.oneRecipeFooter}>
        <Button
          buttonText="Back to all recipes"
          onClickHandler={() => {
            openAllRecipesPage();
          }}
        />
        {/* <Favorite /> */}
      </div>
    );
};

export default OneRecipeFooter;