import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";
import ArticleCard from "./ArticleCard";
import VoteButton from "./VoteButton";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";

function ArticleDetail() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [votes, setVotes] = useState(0);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleNewComment = (newComment) => {
    console.log("Adding new comment:", newComment);
    setComments((prevComments) => [...prevComments, newComment]);
  };

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
      <CommentList article_id={article_id} comments={comments} />
      <CommentInput
        article_id={article_id}
        onNewComment={(newComment) =>
          setComments((prev) => [newComment, ...prev])
        }
      />
    </div>
  );
}

export default ArticleDetail;
