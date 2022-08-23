import * as React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RecipeActionTypes } from "../../store/reducers/recipeReducer/recipeTypes";
import { UserActionTypes } from "../../store/reducers/userReducer/userTypes";
import classes from "./AddRecipeForm.module.css";

type Props = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddRecipeForm: React.FC<Props> = (props) => {
  const { categories } = useTypedSelector((state) => state.categories);
  const { setVisible } = props;
  const [dishTitleValue, setDishTitleValue] = React.useState<string>("");
  const [categoryValue, setCategoryValue] = React.useState<string>(categories[0].strCategory);
  const [instructionsValue, setInstructionsValue] = React.useState<string>("");
  const [linkImageValue, setLinkImageValue] = React.useState<string>("");
  const [ingrAndMeasureValue, setIngrAndMeasureValue] =
    React.useState<string>("");

  //console.log(categories);

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
      idMeal: Date.now(),
      strMeal: dishTitleValue,
      strCategory: categoryValue,
      strSource: linkImageValue,
      strInstructions: instructionsValue,
    };

    console.log(newRecipeData);

    const createIngAndRecipeValues = ingrAndMeasureValue
      .split(", ")
      .map((item, index) => {
        //@ts-ignore
        newRecipeData[`Ingredient${index + 1}`] = item.split(": ")[0];
        //@ts-ignore
        newRecipeData[`Measure${index + 1}`] = item.split(": ")[1];
        return 0;
      });
    //console.log(createIngAndRecipeValues)

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
        <div onClick={crossHandler} className={classes.cross}>
          &#10006;
        </div>
        <h3>ADDING RECIPE</h3>
        <div className={classes.column_container}>
          <div className={classes.form_column}>
            <label htmlFor="title">Title of dish</label>
            <input
              value={dishTitleValue}
              onChange={(e) => setDishTitleValue(e.target.value)}
              type="text"
              id="title"
              placeholder="Enter title of your recipe"
            ></input>
            <label htmlFor="category">Choose category of recipe</label>
            <select
              id="category"
              size={1}
              value={categoryValue}
              onChange={(e) => setCategoryValue(e.target.value)}
            >
              {categories.map((item) => {
                return (
                  <option key={item.idCategory}>{item.strCategory}</option>
                );
              })}
            </select>
            <label htmlFor="image">Image</label>
            <input
              value={linkImageValue}
              id="image"
              type="link"
              placeholder="Enter image link"
              onChange={(e) => setLinkImageValue(e.target.value)}
            ></input>
          </div>
          <div className={classes.form_column}>
            <label htmlFor="ing-measure">Enter ingredients and measure</label>
            <textarea
              value={ingrAndMeasureValue}
              id="ing-measure"
              placeholder="Ingredient1: measure, Ingredient2: measure..."
              onChange={(e) => setIngrAndMeasureValue(e.target.value)}
            ></textarea>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              value={instructionsValue}
              id="instructions"
              placeholder="Enter cooking instructions"
              onChange={(e) => setInstructionsValue(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button onClick={(e) => addRecipeButtonHandler(e)} type="submit">
          Add recipe
        </button>
      </form>
    </>
  );
};

export default AddRecipeForm;
