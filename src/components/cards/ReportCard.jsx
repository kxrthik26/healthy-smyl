const ReportCard = ({ reportDate }) => {
  return (
    <div className="report-card">
      <img className="clipboard-icon" />
      <div>
        <p className="patient-title">{reportDate}</p>
        <p className="view-details">View Details</p>
      </div>
    </div>
  );
};

export default ReportCard;
