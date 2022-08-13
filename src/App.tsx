import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
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

interface AppContext {
  isAuth: boolean;
  setIsAuth?: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
  isAuth: false,
};

export const AppContext = createContext<AppContext>(defaultValue);

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    if(localStorage.getItem('idToken')){
      setIsAuth(true);
    }
  }, []);
  
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
