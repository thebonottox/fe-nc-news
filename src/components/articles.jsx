import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../utils/api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then((allArticles) => {
        setArticles(allArticles);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return (
      <section className="loading">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h2 id="articles_list_title">Articles</h2>
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
    </div>
  );
};
