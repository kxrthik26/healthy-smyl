import ReturnButton from "../../components/buttons/ReturnButton";
import EmergencyHelplineCard from "../../components/cards/EmergencyHelplineCard";
import FinancialAidCard from "../../components/cards/FinancialAidCard";

function FinancialAid() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Financial Aid Helplines</h1>
        </div>
        <div className="helpline-wrapper">
          <FinancialAidCard
            organizationEmail={"example@gmail.com"}
            organizationPhone={"+94 77 777 77 77"}
            organizationInfo={
              "Lorem ipsum dolor sit amet consectetur. Posuere aliquet egestas scelerisque turpis ullamcorper. Non blandit arcu vitae."
            }
            organizationName={"Organization Name"}
          />
        </div>
      </div>
    </>
  );
}

export default FinancialAid;
