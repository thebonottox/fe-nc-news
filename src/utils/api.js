import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://be-nc-news-gerson.onrender.com/api",
});

export const getAllArticles = () => {
  return articlesAPI.get(`/articles`).then(({ data }) => {
    return data;
  });
};

export const getArticleByID = (article_id) => {
  return articlesAPI.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleID = (article_id) => {
  return articlesAPI
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};
