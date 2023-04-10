const DoctorCard = ({ doctorName, doctorSpecialization, doctorCharge }) => {
  return (
    <div className="doctor-card">
      <h5>{doctorName}</h5>
      <p className="doc-specialization">{doctorSpecialization}</p>
      <p className="doc-charge">{doctorCharge}</p>
    </div>
  );
};

export default DoctorCard;
