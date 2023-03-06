import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://be-nc-news-gerson.onrender.com/api",
});

export const getAllArticles = (sortBy) => {
  return articlesAPI
    .get("/articles", {
      params: {
        sort_by: sortBy,
        order: "desc",
      },
    })
    .then(({ data }) => {
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

export const patchArticleById = (article_id, inc_votes) => {
  const patchBody = {
    inc_votes: inc_votes,
  };
  return articlesAPI
    .patch(`/articles/${article_id}`, patchBody)
    .then(({ data }) => [console.log(data)]);
};

export const postNewComment = (username, newComment, article_id) => {
  const postBody = {
    body: newComment,
    username: username,
  };

  return articlesAPI
    .post(`/articles/${article_id}/comments`, postBody)
    .then(({ data }) => {
      return data;
    });
};

export const getArticlesByTopic = (topic) => {
  return articlesAPI.get(`/articles/?topic=${topic}`).then(({ data }) => {
    return data;
  });
};
