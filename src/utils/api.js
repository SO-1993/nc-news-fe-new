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

const voteOnArticle = (article_id, inc_votes) => {
  return api
    .patch(`/articles/${article_id}`, {
      inc_votes: inc_votes,
    })
    .then((response) => {
      return response.data.article;
    });
};

function postNewArticleComment(article_id, commentData) {
  return api
    .post(`/api/articles/${article_id}/comments`, commentData)
    .then(({ data }) => {
      return data.comment;
    });
}

export {
  fetchArticles,
  fetchArticlesById,
  fetchComments,
  voteOnArticle,
  postNewArticleComment,
};
