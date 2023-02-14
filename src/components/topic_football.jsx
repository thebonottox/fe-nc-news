import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../utils/api";
import { Link } from "react-router-dom";

export const Football = () => {
  const { topic } = useParams();
  const [articlesByTopic, setArticlesByTopic] = useState([]);

  useEffect(() => {
    getArticlesByTopic("football")
      .then((data) => {
        console.log(data);
        setArticlesByTopic(data);
      })
      .catch((error) => console.error(error));
  }, [topic]);

  return (
    <section className="articles_list">
      <ul>
        {articlesByTopic.map((article) => (
          <li key={article.article_id} id="article">
            <h3 id="article_title">
              <Link
                id="article_title_link"
                to={`/articles/${article.article_id}`}
              >
                {article.title}
              </Link>
            </h3>
            <img
              src={article.article_img_url}
              alt=""
              id="article_img"
              width="250px"
            />
            <p id="article_topic">Topic: {article.topic}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
