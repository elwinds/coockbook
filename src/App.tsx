import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecipePage from "./pages/RecipePage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryPage from "./pages/CategoryPage";
import CategoriesList from "./components/categories-list/CategoriesList";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <>
      <Banner />
      <CategoriesList />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
