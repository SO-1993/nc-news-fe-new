function ArticleCard({ article }) {
  return (
    <ul>
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Vote Count: {article.votes}</p>
      {/* <img className={styles.img}>src={article.article_img_url} /</img> */}
    </ul>
  );
}
export default ArticleCard;
