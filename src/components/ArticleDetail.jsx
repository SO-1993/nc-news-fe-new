import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";
import ArticleCard from "./ArticleCard";
import VoteButton from "./VoteButton";
import CommentList from "./CommentList";

function ArticleDetail() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [votes, setVotes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticlesById(article_id)
      .then((data) => {
        setArticle(data);
        setVotes(data.votes);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch article:", err);
        setError(true);
        setLoading(false);
      });
  }, [article_id]);

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>There was an error loading the article.</p>;
  if (!article) return <p>No article found.</p>;

  return (
    <div>
      <ArticleCard article={article} />
      <VoteButton article_id={article_id} setVotes={setVotes} />
      <CommentList article_id={article_id} />
    </div>
  );
}

export default ArticleDetail;
