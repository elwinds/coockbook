import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecipePage from "./pages/RecipePage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryPage from "./pages/CategoryPage";
import CategoriesList from "./components/categories-list/CategoriesList";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Auth from "./components/auth/Auth";
import { useActions } from "./hooks/useActions";
import { UserActionTypes } from "./store/reducers/userReducer/userTypes";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Loader } from "./components/UI/Loader/Loader";
import Burger from "./components/burger/Burger";
interface AppContext {
  isAuth: boolean;
  setIsAuth?: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
  isAuth: false,
};

export const AppContext = createContext<AppContext>(defaultValue);

function App() {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { loading, error } = useTypedSelector((state) => state.recipe);
  const { loading: loadingCategories, error: errorCategories } =
    useTypedSelector((state) => state.categories);

  const { fetchRecipes, fetchCategories } = useActions();

  useEffect(() => {
    if (localStorage.getItem("idToken")) {
      setIsAuth(true);
    }

    if (localStorage.getItem("userEmail")) {
      dispatch({
        type: UserActionTypes.SET_USER_EMAIL,
        payload: localStorage.getItem("userEmail"),
      });
    }
    fetchCategories();
    fetchRecipes();
  }, []);

  if (loading || loadingCategories) {
    return <Loader />;
  }

  if (error || errorCategories) {
    return <h1>Произошла ошибка {error || errorCategories}</h1>;
  }
  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <Navbar />
      <Banner />
      <CategoriesList />
      <Burger/>
      <Routes>
        <Route path="/" element={<MainPage />} />

        {isAuth ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/auth" element={<Auth />} />
        )}

        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
