import React, { useState, useEffect } from "react";
import axios from "axios";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-nc-news-gerson.onrender.com/api/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 id="articles_list_title">Articles</h2>
    <section className="articles_list">
      <ul>
        {articles.map((article) => (
          <li key={article.article_id} id="article">
            <h3 id="article_title">{article.title}</h3>
            <img src={article.article_img_url} alt="article image" id="article_img" width= "250px"/>
            <p id="article_topic">Topic: {article.topic}</p>
            
          </li>
        ))}
      </ul>
    </section>
    </div>
  );
};
