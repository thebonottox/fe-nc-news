import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <section className="articles_list">
      <ul>
        {articles.map((article) => (
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
              alt="article image"
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

export default ArticlesList;