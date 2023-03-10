import { deleteComment } from "../utils/api";
import { BsFillTrashFill } from "react-icons/bs";

export const Comments = ({ comments, setComments, commentFormattedDates }) => {
  const handleDelete = (comment_id) => {
    deleteComment(comment_id)
      .then(() => {
        setComments(
          comments.filter((comment) => {
            return comment.comment_id !== comment_id;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
      <section className="comments">
        <h3 id="comment_section_title">{comments.length} comments:</h3>
        {comments && commentFormattedDates ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={index} id="comment">
                <p>{comment.body}</p>
                <div className="comment_info">
                  <h6 id="comment_author">Posted by {comment.author}</h6>
                  <h6 id="comment_date">on {commentFormattedDates[index]}</h6>
                  <h6 id="comment_votes">Votes: {comment.votes}</h6>
                  <div
                    className="delete_icon"
                    onClick={() => handleDelete(comment.comment_id)}
                  >
                    <BsFillTrashFill />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments found</p>
        )}
      </section>
   
  );
};
