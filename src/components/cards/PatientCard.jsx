const PatientCard = ({ patientImg, patientName, appointmentTime }) => {
  return (
    <div className="patient-card">
      <div className="flex-left">
        <img src={patientImg} />
        <div>
          <p className="patient-title">{patientName}</p>
          <p className="view-details">View Details</p>
        </div>
      </div>
      <p className="apt-time">{appointmentTime}</p>
    </div>
  );
};

export default PatientCard;
