import ReturnButton from "../../components/buttons/ReturnButton";
import ArticleCard from "../../components/cards/ArticleCard";
import PatientCard from "../../components/cards/PatientCard";
import ReportCard from "../../components/cards/ReportCard";
import DummyImg from "../../styles/resources/images/dummy_food_img.png";

function PreviousReports() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Patient Profile"} />
        <div className="page-headline">
          <h1>Previous Reports</h1>
        </div>
        <div className="article-cards-wrapper">
          <ReportCard reportDate={"21 Jan 2023"} />
          <ReportCard reportDate={"21 Jan 2023"} />
          <ReportCard reportDate={"21 Jan 2023"} />
        </div>
      </div>
    </>
  );
}

export default PreviousReports;
