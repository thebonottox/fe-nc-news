import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleID } from "../utils/api";
import { deleteComment } from "../utils/api";

export const Comments = ({ comments, setComments, commentFormattedDates }) => {
  // let id = 1301;
  const handleDelete = (comment_id) => {
    deleteComment(comment_id).then(() => {
      setComments(
        comments.filter((comment) => {
          return comment.comment_id !== comment_id;
        })
      );
    });
  };

  return (
    <div>
      <section className="comments">
        <h3 id="comment_section_title">{comments.length} comments:</h3>
        {comments && commentFormattedDates ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={index} id="comment">
                <p>{comment.body}</p>
                <div className="comment_info">
                  <h6 id="comment_author">Posted by {comment.author}</h6>
                  <h6 id="comment_date"> on {commentFormattedDates[index]}</h6>
                  <h6 id="comment_votes">Votes: {comment.votes}</h6>
                  <button onClick={() => handleDelete(comment.comment_id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments found</p>
        )}
      </section>
    </div>
  );
};
