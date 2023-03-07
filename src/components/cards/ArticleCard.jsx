const ArticleCard = ({ articleImg, articleTitle, articleGlimpse }) => {
  return (
    <div className="article-card">
      <img src={articleImg} />
      <div>
        <p className="article-title">{articleTitle}</p>
        <p className="article-glimpse">{articleGlimpse}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
