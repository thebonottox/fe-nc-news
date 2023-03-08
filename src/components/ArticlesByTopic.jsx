import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../utils/api";
import { Link } from "react-router-dom";

export const Topics = ({ topic }) => {
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
                    reloadDocument
                  >
                    {article.title}
                  </Link>
                </h3>
                <img
                  src={article.article_img_url}
                  alt=""
                  id="articleByTopic_img"
                  width="250px"
                />
                <div className="articleByTopic_div">
                  <p className="articlebyTopic_writtenBy">
                    Written by: {article.author} on {date.toLocaleString()}
                  </p>
                  <p className="articleByTopic_topic">Topic: {article.topic}</p>
                  <p className="articleByTopic_comments">
                    Comments: {article.comment_count}
                  </p>
                  <p className="articleByTopic_votes">Votes: {article.votes}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
