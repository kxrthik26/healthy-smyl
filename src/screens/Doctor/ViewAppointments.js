import ReturnButton from "../../components/buttons/ReturnButton";
import ArticleCard from "../../components/cards/ArticleCard";
import PatientCard from "../../components/cards/PatientCard";
import DummyImg from "../../styles/resources/images/dummy_food_img.png";

function ViewAppointments() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Your Patients</h1>
        </div>
        <div className="article-cards-wrapper">
          <PatientCard
            patientName={"Quentin Tarrantino"}
            patientImg={DummyImg}
            appointmentTime={"4.00 PM"}
          />
          <PatientCard
            patientName={"Quentin Tarrantino"}
            patientImg={DummyImg}
            appointmentTime={"4.00 PM"}
          />
          <PatientCard
            patientName={"Quentin Tarrantino"}
            patientImg={DummyImg}
            appointmentTime={"4.00 PM"}
          />
          <PatientCard
            patientName={"Quentin Tarrantino"}
            patientImg={DummyImg}
            appointmentTime={"4.00 PM"}
          />
        </div>
      </div>
    </>
  );
}

export default ViewAppointments;
