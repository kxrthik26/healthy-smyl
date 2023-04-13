import ReturnButton from "../../components/buttons/ReturnButton";
import { Progress, Space } from "antd";
import NutritionStatCard from "../../components/cards/NutritionStatCard";
import NutritionTrackerImgWidget from "../../components/data_display/NutritionTrackerImgWidget";
import PrimaryButtonCard from "../../components/cards/PrimaryButtonCard";
import DetailedMealView from "../../components/buttons/DetailedMealView";
import TrackerDaySlider from "../../components/banners/TrackerDaySlider";

import { CircularProgress } from "@mui/material";

function NutritionHistory() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Nutrition Tracker</h1>
        </div>
        <TrackerDaySlider trackingDay={"This Week"} />

        <div className="nutrition-history-stats-container">
          <p>
            Avg. Protein <span>46%</span>
          </p>
          <p>
            Avg. Carbohydrate <span>46%</span>
          </p>
          <p>
            Avg. Fiber <span>46%</span>
          </p>
          <p>
            Avg. Fat <span>46%</span>
          </p>
          <p>
            Avg. Other <span>46%</span>
          </p>
        </div>

        <div className="section-wrapper">
          <h4>Daily Calorie Challenge</h4>
          <div className="daily-progress-wrapper">
            <div className="daily-progress">
              <p>MON</p>
              <CircularProgress
                variant="determinate"
                value={25}
              ></CircularProgress>
            </div>
            <div className="daily-progress">
              <p>TUE</p>
              <CircularProgress
                variant="determinate"
                value={34}
              ></CircularProgress>
            </div>
            <div className="daily-progress">
              <p>WED</p>
              <CircularProgress
                variant="determinate"
                value={81}
              ></CircularProgress>
            </div>
            <div className="daily-progress">
              <p>THU</p>
              <CircularProgress
                variant="determinate"
                value={3}
              ></CircularProgress>
            </div>
            <div className="daily-progress">
              <p>FRI</p>
              <CircularProgress
                variant="determinate"
                value={47}
              ></CircularProgress>
            </div>
            <div className="daily-progress">
              <p>SAT</p>
              <CircularProgress
                variant="determinate"
                value={94}
              ></CircularProgress>
            </div>
            <div className="daily-progress">
              <p>SUN</p>
              <CircularProgress
                variant="determinate"
                value={100}
              ></CircularProgress>
            </div>
          </div>
        </div>

        <div className="nutrition-history-stats-container">
          <p>
            Daily Avg. Intake <span>1157kcal</span>
          </p>
          <p>
            Avg. Intake for Breakfast <span>1157kcal</span>
          </p>
          <p>
            Avg. Intake for Lunch <span>1157kcal</span>
          </p>
          <p>
            Avg. Intake for Dinner <span>1157kcal</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default NutritionHistory;
