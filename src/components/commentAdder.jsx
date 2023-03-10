import { useState } from "react";
import { postNewComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

export const AddComment = ({ comments, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState(""); //
  const { article_id } = useParams();
  const [selectedUsername, setSelectedUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setSelectedUsername(true);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!newComment.trim() || !selectedUsername) {
        alert("Please enter a comment and select a username");
        return;
      }

      if (isSubmitting) {
        return;
      }

      setIsSubmitting(true);

    postNewComment(username, newComment, article_id).then((newComment) => {
      setComments([newComment, ...comments]);
      setNewComment("");
      setUsername("");
      setSelectedUsername(false);
    })
    .finally(() => {
        setTimeout(() => {
          setIsSubmitting(false);
        }, 1000);
      });
  },
  [newComment, username, selectedUsername, isSubmitting, comments, article_id, setComments]
);

  return (
    
    <form className="new_comment" onSubmit={handleSubmit}>
      <div className="comment_username">
      <label className="label_username" htmlFor="username">
        Username:
      </label>
      <select
        className="username_select"
        value={username}
        onChange={handleUsernameChange}
      >
        <option value="place_holder">Select User</option>
        <option value="grumpy19">grumpy19</option>
        <option value="cooljmessy">cooljmessy</option>
        <option value="weegembump">weegembump</option>
      </select>
      </div>

      <label className="label_addComment" htmlFor="new-comment">
        Add Comment:
      </label>
      <textarea
        placeholder="Type here..."
        id="new_comment_text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button id="new_Comment_btn" type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Adding..." : "Add Comment"}
      </button>
    </form>
    
  );
};
