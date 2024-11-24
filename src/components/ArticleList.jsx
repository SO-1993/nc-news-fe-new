import React, { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import { Link } from "react-router-dom";

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
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <p>Comments: {article.comment_count}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default ArticleList;
