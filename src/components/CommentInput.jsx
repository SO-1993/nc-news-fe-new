import { useState } from "react";
import { postNewArticleComment } from "../utils/api";

function CommentInput({ article_id, onNewComment }) {
  const [author, setAuthor] = useState("");
  const [commentText, setCommentText] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    if (!author.trim() || !commentText.trim()) {
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const commentData = { author, body: commentText };

    postNewArticleComment(article_id, commentData)
      .then((newComment) => {
        console.log("New Comment Posted:", newComment);
        onNewComment(newComment);
        setIsSuccess(true);
        setAuthor("");
        setCommentText("");
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter your name"
      />
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Enter your comment"
      />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit Comment"}
      </button>

      {isError && (
        <p>There was an error submitting your comment. Please try again.</p>
      )}
      {isSuccess && <p>Your comment was posted successfully!</p>}
    </div>
  );
}

export default CommentInput;
