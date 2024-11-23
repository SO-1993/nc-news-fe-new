import axios from "axios";

const api = axios.create({
  baseURL: "https://api-nc-news.louis-emmerson.dev/api",
});

const fetchArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

const fetchArticlesById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

const fetchComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export { fetchArticles, fetchArticlesById, fetchComments };
