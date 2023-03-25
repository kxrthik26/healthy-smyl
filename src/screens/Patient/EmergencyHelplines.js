import ReturnButton from "../../components/buttons/ReturnButton";
import EmergencyHelplineCard from "../../components/cards/EmergencyHelplineCard";

function EmergencyHelplines() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Emergency Helplines</h1>
        </div>
        <div className="helpline-wrapper">
          <EmergencyHelplineCard
            helplineLabel={"Ambulance Sevices"}
            helplineNumber={"110"}
          />
          <EmergencyHelplineCard
            helplineLabel={"Blood Bank"}
            helplineNumber={"+94 11 528 9898"}
          />
          <EmergencyHelplineCard
            helplineLabel={"Home Nursing Sevices"}
            helplineNumber={"+94 11 254 4450"}
          />
          <EmergencyHelplineCard
            helplineLabel={"Police"}
            helplineNumber={"118"}
          />
        </div>
      </div>
    </>
  );
}

export default EmergencyHelplines;
