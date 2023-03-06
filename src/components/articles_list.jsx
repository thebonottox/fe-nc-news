import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles, sortBy, setSortBy }) => {
  const handleSelection = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <>
        <section>
          <p>Sort By</p>
          <select value={sortBy} onChange={handleSelection}>
            <option value={"author"}>Author</option>
            <option value={"comment_count"}>Comment Count</option>
            <option value={"created_at"}>Most Recent</option>
            <option value={"title"}>Title</option>
            <option value={"topic"}>Topic</option>
            <option value={"votes"}>Votes</option>
          </select>
        </section>
      </>
      <section className="articles_list">
        <ul>
          {articles.map((article) => {
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
                  alt="article image"
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

export default ArticlesList;
