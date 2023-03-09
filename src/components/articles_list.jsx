import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles, sortBy, setSortBy, order, setOrder }) => {
  const handleSelection = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  return (
    <>
      <div className="sort_order">
        <section className="sort_section">
          <p className="sort_title">Sort By:</p>
          <select
            className="sort_select"
            value={sortBy}
            onChange={handleSelection}
          >
            <option value={"author"}>Author</option>
            <option value={"comment_count"}>Comment Count</option>
            <option value={"created_at"}>Date</option>
            <option value={"title"}>Title</option>
            <option value={"topic"}>Topic</option>
            <option value={"votes"}>Votes</option>
          </select>
        </section>
        <section className="order_section">
          <p className="order_title">Order by:</p>
          <select className="order_select" value={order} onChange={handleOrder}>
            <option value={"asc"}>A-Z</option>
            <option value={"desc"}>Z-A</option>
          </select>
        </section>
      </div>
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
                  alt=""
                  id="article_img"
                  width="250px"
                />
                <div className="article_list_info">
                  <p id="article_writtenBy">
                    Written by: {article.author} on {date.toLocaleString()}
                  </p>
                  <p id="article_topic">Topic: {article.topic}</p>
                  <p id="article_comments">Comments: {article.comment_count}</p>
                  <p id="article_votes">Votes: {article.votes}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default ArticlesList;
