import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import classes from "./OneRecipe.module.scss";


const OneRecipeFooter: React.FC = () => {
    const navigate = useNavigate();

    const openAllRecipesPage = () => {
        navigate('/')
    }

    return (
      <div className={classes.footer}>
        <Button
          buttonText="Back to all recipes"
          onClickHandler={() => {
            openAllRecipesPage();
          }}
        />
      </div>
    );
};

export default OneRecipeFooter;