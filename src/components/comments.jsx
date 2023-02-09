import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleID } from "../utils/api";

export const Comments = ({ comments, commentFormattedDates }) => {
  console.log({ comments });
  console.log({ commentFormattedDates });

  return (
    <div>
      <section className="comments">
        <h3 id="comment_section_title">{comments.length} comments:</h3>
        {comments && commentFormattedDates ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={comment.comment_id} id="comment">
                <p>{comment.body}</p>
                <div className="comment_info">
                <h6 id="comment_author">Posted by {comment.author}</h6>
                <h6 id="comment_date"> on {commentFormattedDates[index]}</h6>
                <h6 id="comment_votes">Votes: {comment.votes}</h6>
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
