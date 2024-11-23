import React, { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (error) return <p>There has been an error loading articles.</p>;
  if (loading) return <p>Loading articles...</p>;
  if (articles.length === 0) return <p>No articles available.</p>;

  return (
    <section>
      {articles.map((article) => (
        <div key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        </div>
      ))}
    </section>
  );
}

export default ArticleList;
