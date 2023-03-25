const Statistics = ({ statValue, sup, sub, statLabel }) => {
  return (
    <div className="stat-card">
      <h1>
        {statValue} <span className="sub">{sub}</span>
        <span className="sup">{sup}</span>
      </h1>
      <p>{statLabel}</p>
    </div>
  );
};

export default Statistics;
