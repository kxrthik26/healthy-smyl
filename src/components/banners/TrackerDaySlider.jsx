const TrackerDaySlider = ({ trackingDay }) => {
  return (
    <div className="tracker-day-slider">
      <img className="arrow-head-left-icon" />
      {trackingDay}
      <img className="arrow-head-right-icon" />
    </div>
  );
};

export default TrackerDaySlider;
