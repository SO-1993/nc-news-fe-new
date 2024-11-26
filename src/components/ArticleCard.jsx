function ArticleCard({ article }) {
  return (
    <ul>
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Created at: {article.created_at}</p>
      <img src={article.article_img_url} />
    </ul>
  );
}
export default ArticleCard;
