const EmergencyHelplineCard = ({ helplineLabel, helplineNumber }) => {
  return (
    <div className="helpline-card">
      <p className="helpline-label">{helplineLabel}</p>
      <p className="helpline-no">{helplineNumber}</p>
      <div className="helpline-call">
        <img className="phone-icon" />
        <a href={"tel:" + helplineNumber}>Call</a>
      </div>
    </div>
  );
};

export default EmergencyHelplineCard;
