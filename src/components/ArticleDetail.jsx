import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";

function ArticleDetail() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticlesById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [article_id]);

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>There was an error loading the article.</p>;
  if (!article) return <p>No article found.</p>;

  return (
    <div>
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Comments: {article.comment_count}</p>
      <p>{article.body}</p>
    </div>
  );
}

export default ArticleDetail;
