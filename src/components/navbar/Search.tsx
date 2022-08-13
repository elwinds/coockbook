import * as React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Dropdown from "./Dropdown";
import classes from "./Navbar.module.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const recipes = useTypedSelector((state) => state.recipe.recipes);

  const filteredRecipes = React.useMemo(() => {
    if (!recipes || !recipes.length) {
      return [];
    }

    return recipes.filter((item) =>
      item.strMeal.toLowerCase().match(searchQuery.toLowerCase())
    );
  }, [searchQuery, recipes]);

  return (
    <div className={classes.searchContainer}>
      <input
        value={searchQuery}
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
        className={classes.searchInput}
      />
      {searchQuery && (
        <Dropdown recipes={filteredRecipes} searchQuery={setSearchQuery} />
      )}
    </div>
  );
};

export default Search;
