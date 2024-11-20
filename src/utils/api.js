import axios from "axios";

const api = axios.create({
  baseURL: "https://api-nc-news.louis-emmerson.dev/api",
});

const fetchArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export { fetchArticles };
