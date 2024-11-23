import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../utils/api";

function CommentList() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchComments()
      .then(() => {
        setComments(comments);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        console.error("Error fetching comments: ", error);
      }),
      [article_id];
  });
}

if (error) return <p>There has been an error loading comments.</p>;
if (loading) return <p>Loading comments...</p>;
if (comments.length === 0) return <p>No comments yet for this article.</p>;

return (
  <div>
    <ul>
      {comments.map((comment) => (
        <li key={comment.comment_id}>{comment.body}</li>
      ))}
    </ul>
  </div>
);

export default CommentList;
