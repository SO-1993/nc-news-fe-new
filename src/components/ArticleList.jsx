import React, { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticles();
  }, []);

  return <section></section>;
}

export default ArticleList;
