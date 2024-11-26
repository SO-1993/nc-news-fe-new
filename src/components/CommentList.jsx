import React, { useState, useEffect } from "react";
import { fetchComments } from "../utils/api";

function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchComments(article_id)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching comments:", err);
        setError(true);
        setLoading(false);
      });
  }, [article_id]);

  if (error) return <p>There has been an error loading comments.</p>;
  if (loading) return <p>Loading comments...</p>;
  if (comments.length === 0) return <p>No comments yet for this article.</p>;

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.comment_id}>
          <p>
            {comment.author}: {comment.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
