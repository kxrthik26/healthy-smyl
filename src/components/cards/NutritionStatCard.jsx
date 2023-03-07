const ArticleCard = ({ statValue, statLabel }) => {
  return (
    <div className="nutrition-stat-card">
      <h1>
        {statValue}
        <sup> kcal</sup>
      </h1>
      <p>{statLabel}</p>
    </div>
  );
};

export default ArticleCard;
