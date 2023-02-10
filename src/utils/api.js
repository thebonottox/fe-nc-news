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

export const patchArticleById = (article_id, inc_votes) => {
  const patchBody = {
    inc_votes: inc_votes,
  };
  return articlesAPI
    .patch(`/articles/${article_id}`, patchBody)
    .then(({ data }) => [console.log(data)]);
};

export const postNewComment = (username, newComment, article_id) => {
  // console.log(`Article ID: ${article_id}`);
  // console.log(`New Comment: ${newComment}`);
  const postBody = {
    body: newComment,
    username: username,
  };
  console.log("Post Body:", JSON.stringify(postBody, null, 2));
  return articlesAPI
    .post(`/articles/${article_id}/comments`, postBody)
    .then(({ data }) => {
      return data;
    });
};
