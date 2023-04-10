import { Progress, Segmented } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import PointsBlock from "../../components/banners/PointsBlock";

function PointsTracker() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Points</h1>
        </div>
        <div className="flex-col">
          <div className="points-container">
            <img className="gold-coin" />
            <h4>50 Points</h4>
          </div>
          <div className="progress-wrapper">
            <h5>Level Progress</h5>
            <p>100 points</p>
            <Progress percent={50} />
            <div className="progress-txts">
              <p>You just started</p>
              <p>Level 1</p>
            </div>
          </div>
        </div>
        <div className="section-wrapper">
          <Segmented block options={["Ongoing", "Completed"]} />
          <h5 className="points-obj-header">Objective for Level 1</h5>
          <div className="article-cards-wrapper">
            <PointsBlock
              pointsLabel={"Upload your meal images 3 times a day"}
              pointsCount={"10"}
            />
            <PointsBlock
              pointsLabel={"Upload your meal images 3 times a day"}
              pointsCount={"10"}
            />
            <PointsBlock
              pointsLabel={"Upload your meal images 3 times a day"}
              pointsCount={"10"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PointsTracker;
