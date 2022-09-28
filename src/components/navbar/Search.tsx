import * as React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useOnClickOutside from "../../hooks/useClickOutside";
import Dropdown from "./Dropdown";
import classes from "./Navbar.module.scss";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const ref = React.useRef<HTMLDivElement | null>(null);
  const recipes = useTypedSelector((state) => state.recipe.recipes);
  useOnClickOutside(ref, () => setSearchQuery(""));

  const filteredRecipes = React.useMemo(() => {
    if (!recipes || !recipes.length) {
      return [];
    }

    return recipes.filter((item) =>
      item.strMeal.toLowerCase().match(searchQuery.toLowerCase())
    );
  }, [searchQuery, recipes]);

  return (
    <div className={classes.searchContainer} ref={ref}>
      <input
        value={searchQuery}
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
        className={classes.searchContainer__input}
      />
      {searchQuery && (
        <Dropdown recipes={filteredRecipes} searchQuery={setSearchQuery} />
      )}
    </div>
  );
};

export default Search;
