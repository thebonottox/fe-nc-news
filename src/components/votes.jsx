import { useState } from "react";
import { patchArticleById } from "../utils/api";

export const Votes = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  //Helper Functions for the buttons:
  const upVote = () => {
    // ui update (optimistic rendering)
    setVoteChange((currChange) => currChange + 1);
    // do the request
    patchArticleById(article_id, 1);
  };

  const downVote = () => {
    setVoteChange((currChange) => currChange - 1);
    patchArticleById(article_id, -1);
  };

  return (
    <section className="vote_buttons">
      <h4 id="vote_box_title">Did you like the article? </h4>
      <button
        id="vote_btn"
        disabled={voteChange === -1}
        onClick={() => downVote()}
      >
        Down
      </button>
      <span id="vote_number">{votes + voteChange} Votes</span>
      <button
        id="vote_btn"
        disabled={voteChange === 1}
        onClick={() => upVote()}
      >
        Up
      </button>
    </section>
  );
};
