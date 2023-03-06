import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../utils/api";
import { Link } from "react-router-dom";

export const Topics = ({ topic, sortBy, setSortBy }) => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);

  useEffect(() => {
    getArticlesByTopic(topic)
      .then((data) => {
        setArticlesByTopic(data);
      })
      .catch((error) => console.error(error));
  }, [topic]);

  return (
    <>
      <section className="articles_list">
        <ul>
          {articlesByTopic.map((article) => {
            let date = new Date(article.created_at);
            return (
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
                <p>
                  Written by: {article.author} on {date.toLocaleString()}
                </p>
                <p id="article_topic">Topic: {article.topic}</p>
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
