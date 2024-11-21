import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path="/articles/:article_id" element={<ArticleDetail />} />
    </Routes>
  );
}

export default App;
