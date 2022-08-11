import * as React from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./CategoriesList.module.css";

const CategoriesList = () => {
  const { fetchCategories } = useActions();

  const { categories, loading, error } = useTypedSelector(
    (state) => state.categories
  );

  React.useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>Произошла ошибка {error}</h1>;
  }

  return (
    <div className={classes.categoriesList}>
      {categories.map((item) => {
        return <div key={item.idCategory} className={classes.oneCategoryItem}>{item.strCategory}</div>;
      })}
    </div>
  );
};

export default CategoriesList;
