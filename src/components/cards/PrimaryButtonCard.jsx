const PrimaryButtonCard = ({ cardIcon, cardLabel }) => {
  return (
    <div className="primary-btn-card">
      <img className={cardIcon} />
      <p>{cardLabel}</p>
    </div>
  );
};

export default PrimaryButtonCard;
