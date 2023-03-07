import ReturnButton from "../../components/buttons/ReturnButton";
import { Progress } from "antd";
import NutritionStatCard from "../../components/cards/NutritionStatCard";
import NutritionTrackerImgWidget from "../../components/data_display/NutritionTrackerImgWidget";

function NutritionTracker() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Nutrition Tracker</h1>
        </div>
        <div className="comp-container">
          <Progress type="circle" percent={75} format={() => ""} />
          <div className="comp-wrapper">
            <h1>
              600 <span>kcal</span>
            </h1>
            <p>
              Carbohydrate <span className="nutri-composition">30%</span>
            </p>
            <p>
              Protein <span className="nutri-composition">40%</span>
            </p>
            <p>
              Fat <span className="nutri-composition">30%</span>
            </p>
            <p>
              Sodium{" "}
              <span className="nutri-composition">
                966 <span className="nutri-mg">mg</span>
              </span>
            </p>
            <p>
              Potassium{" "}
              <span className="nutri-composition">
                845 <span className="nutri-mg">mg</span>
              </span>
            </p>
            <p className="comp-caption">*For further analysis get premium</p>
          </div>
        </div>
        <div className="flex-row">
          <NutritionStatCard statLabel={"Goal"} statValue={"3,000"} />
          <NutritionStatCard
            statLabel={"to Complete Daily Goal"}
            statValue={"3,000"}
          />
        </div>
        <div className="btn-wrapper">
          <NutritionTrackerImgWidget mealTime={"Breakfast"} />
          <NutritionTrackerImgWidget mealTime={"Lunch"} />
          <NutritionTrackerImgWidget mealTime={"Brunch"} />
        </div>
        <div className="section-wrapper">
          <h4>Recommended Meals</h4>
          <div className="flex-row"></div>
        </div>
      </div>
    </>
  );
}

export default NutritionTracker;
