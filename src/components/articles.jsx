import React, { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import ArticlesList from "./articles_list";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    getAllArticles(sortBy, order)
      .then((Articles) => {
        setArticles(Articles);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [sortBy, order]);

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
      <ArticlesList
        articles={articles}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
};
