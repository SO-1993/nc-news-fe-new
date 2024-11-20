import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
