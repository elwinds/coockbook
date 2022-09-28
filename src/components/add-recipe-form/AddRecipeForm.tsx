import * as React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RecipeActionTypes } from "../../store/reducers/recipeReducer/recipeTypes";
import classes from "./AddRecipeForm.module.scss";

type Props = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddRecipeForm: React.FC<Props> = (props) => {
  const { categories } = useTypedSelector((state) => state.categories);
  const { setVisible } = props;
  const [dishTitleValue, setDishTitleValue] = React.useState<string>("");
  const [categoryValue, setCategoryValue] = React.useState<string>(
    categories?.[0]?.strCategory || ""
  );
  const [instructionsValue, setInstructionsValue] = React.useState<string>("");
  const [linkImageValue, setLinkImageValue] = React.useState<string>("");
  const [ingrAndMeasureValue, setIngrAndMeasureValue] =
    React.useState<string>("");

  const dispatch = useDispatch();

  const addRecipeButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDishTitleValue("");
    setCategoryValue("");
    setInstructionsValue("");
    setLinkImageValue("");
    setIngrAndMeasureValue("");
    setVisible(false);

    const newRecipeData = {
      idMeal: String(Date.now()),
      strMeal: dishTitleValue,
      strCategory: categoryValue,
      strMealThumb: linkImageValue,
      strInstructions: instructionsValue,
    };

    const createIngAndRecipeValues = ingrAndMeasureValue
      .split(", ")
      .map((item, index) => {
        //@ts-ignore
        newRecipeData[`strIngredient${index + 1}`] = item.split(": ")[0];
        //@ts-ignore
        newRecipeData[`strMeasure${index + 1}`] = item.split(": ")[1];
        return 0;
      });

    dispatch({
      type: RecipeActionTypes.ADD_USER_RECIPE,
      payload: newRecipeData,
    });
  };

  const crossHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <form className={classes.form}>
        <div onClick={crossHandler} className={classes.form__cross}>
          &#10006;
        </div>
        <h3 className={classes.form__title}>ADDING RECIPE</h3>
        <div className={classes.colsContainer}>
          <div className={classes.column}>
            <label className={classes.column__label} htmlFor="title">
              Title of dish
            </label>
            <input
              className={classes.column__input}
              value={dishTitleValue}
              onChange={(e) => setDishTitleValue(e.target.value)}
              type="text"
              id="title"
              placeholder="Enter title of your recipe"
            ></input>
            <label className={classes.column__label} htmlFor="category">
              Choose category of recipe
            </label>
            <select
              className={classes.column__select}
              id="category"
              size={1}
              value={categoryValue}
              onChange={(e) => setCategoryValue(e.target.value)}
            >
              {categories.map((item) => {
                return (
                  <option className={classes.column__option} key={item.idCategory}>
                    {item.strCategory}
                  </option>
                );
              })}
            </select>
            <label className={classes.column__label} htmlFor="image">
              Image
            </label>
            <input
              className={classes.column__input}
              value={linkImageValue}
              id="image"
              type="text"
              placeholder="Enter image link"
              onChange={(e) => setLinkImageValue(e.target.value)}
            ></input>
          </div>
          <div className={classes.column}>
            <label className={classes.column__label} htmlFor="ing-measure">
              Enter ingredients and measure
            </label>
            <textarea
              className={classes.column__textarea}
              value={ingrAndMeasureValue}
              id="ing-measure"
              placeholder="Ingredient1: measure, Ingredient2: measure..."
              onChange={(e) => setIngrAndMeasureValue(e.target.value)}
            ></textarea>
            <label className={classes.column__label} htmlFor="instructions">
              Instructions
            </label>
            <textarea
              className={classes.column__textarea}
              value={instructionsValue}
              id="instructions"
              placeholder="Enter cooking instructions"
              onChange={(e) => setInstructionsValue(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button
          className={classes.btn}
          onClick={(e) => addRecipeButtonHandler(e)}
          type="submit"
        >
          Add recipe
        </button>
      </form>
    </>
  );
};

export default AddRecipeForm;
