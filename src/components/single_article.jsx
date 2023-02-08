import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../utils/api";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleByID(article_id)
      .then((data) => {
        setArticle(data.article);
      })
      .catch((error) => console.error(error));
  }, [article_id]);

  return (
    <section className="single_article">
      <h2 id="single_art_title">{article.title}</h2>
      <img
        src={article.article_img_url}
        alt="article image"
        id="single_art_img"
        width="350px"
      />

      <p id="single_art_body">{article.body}</p>
      <h3 id="comments">Comments will go here:</h3>
    </section>
  );
};
