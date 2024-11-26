import React, { useState } from "react";
import { voteOnArticle } from "../utils/api";

function VoteButton({ article_id, setVotes }) {
  const [error, setError] = useState(false);

  const handleDecrement = () => {
    voteOnArticle(article_id, -1)
      .then(() => {
        setVotes((prevCount) => prevCount - 1);
      })
      .catch((error) => {
        console.error("Failed to decrement vote:", error);
        setError(true);
      });
  };

  const handleIncrement = () => {
    voteOnArticle(article_id, 1)
      .then(() => {
        setVotes((prevCount) => prevCount + 1);
      })
      .catch((error) => {
        console.error("Failed to increment vote:", error);
        setError(true);
      });
  };

  return (
    <div>
      <button onClick={handleDecrement}> - </button>
      <button onClick={handleIncrement}> + </button>
    </div>
  );
}

export default VoteButton;
