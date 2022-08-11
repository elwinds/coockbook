import React from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecipePage from "./pages/RecipePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/recipe/:recipeId" element={<RecipePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
