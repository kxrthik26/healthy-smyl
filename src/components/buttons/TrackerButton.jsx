const TrackerButton = ({ buttonLabel, buttonIcon }) => {
  return (
    <div className="tracker-btn">
      <img className={buttonIcon} />
      {buttonLabel}
    </div>
  );
};

export default TrackerButton;
