const FinancialAidCard = ({
  organizationName,
  organizationEmail,
  organizationInfo,
  organizationPhone,
}) => {
  return (
    <div className="helpline-card">
      <p className="helpline-label">{organizationName}</p>
      <p className="helpline-no">{organizationInfo}</p>
      <div className="helpline-call">
        <img className="phone-icon" />
        <a href={"tel:" + organizationPhone}>{organizationPhone}</a>
      </div>
      <div className="helpline-call">
        <img className="mail-icon" />
        <a href={"mailto:" + organizationEmail}>{organizationEmail}</a>
      </div>
    </div>
  );
};

export default FinancialAidCard;
