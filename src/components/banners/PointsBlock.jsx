const PointsBlock = ({ pointsLabel, pointsCount }) => {
  return (
    <div className="points-block">
      {pointsLabel}
      <div>
        <img className="gold-coin" />
        {pointsCount} Points
      </div>
    </div>
  );
};

export default PointsBlock;
