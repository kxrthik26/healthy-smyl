const AppointmentCard = ({
  docName,
  docSpecialization,
  appointmentNo,
  appointmentDate,
  appointmentTime,
  appointmentLink,
  specialNotes,
}) => {
  return (
    <div className="appointment-confirmation-card">
      <div className="appointment-title">
        <div className="title-content">
          <h5>{docName}</h5>
          <p>{docSpecialization}</p>
        </div>
        <div className="appointment-ticket">{appointmentNo}</div>
      </div>
      <div className="meet-info-widget">
        <img className="calendar-icon" />
        {appointmentDate}
      </div>
      <div className="meet-info-widget">
        <img className="clock-icon" />
        {appointmentTime}
      </div>
      <div className="meet-info-widget">
        <img className="video-icon" />
        <a href={appointmentLink}>Join Video Call</a>
      </div>
      <div className="spl-notes-wrapper">
        <p className="spl-note-title">Special Notes</p>
        <p className="spl-note-content">{specialNotes}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
