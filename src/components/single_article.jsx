import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../utils/api";
import { Comments } from "./comments";
import { getCommentsByArticleID } from "../utils/api";
import { Votes } from "./votes";
import { AddComment } from "./commentAdder";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");
  const [commentFormattedDates, setCommentFormattedDates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getArticleByID(article_id),
      getCommentsByArticleID(article_id),
    ])
      .then(([articlesFromAPI, commentsFromAPI]) => {
        setArticle(articlesFromAPI.article);
        setComments(commentsFromAPI);
        setLoading(false);

        const date = new Date(articlesFromAPI.article.created_at);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        setFormattedDate(date.toLocaleDateString("en-GB", options));

        setCommentFormattedDates(
          commentsFromAPI.map((comment) => {
            const commentDate = new Date(comment.created_at);
            return commentDate.toLocaleDateString("en-GB", options);
          })
        );
      })
      .catch((error) => console.error(error));
  }, [article_id]);

  if (loading) {
    return (
      <section className="loading">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="single_article">
      <h2 id="single_art_title">{article.title}</h2>
      <img
        src={article.article_img_url}
        alt=""
        id="single_art_img"
        width="300px"
      />

      <p id="single_art_body">{article.body}</p>
      <div className="date_and_author">
        <p id="created_at">Published on {formattedDate}</p>
        <p id="single_art_author">by {article.author}</p>
      </div>
      <Votes votes={article.votes} article_id={article_id} />
      <Comments
        comments={comments}
        setComments={setComments}
        commentFormattedDates={commentFormattedDates}
      />
      <AddComment comments={comments} setComments={setComments} />
    </section>
  );
};
