import ReturnButton from "../../components/buttons/ReturnButton";
import { Button } from "antd";
import DummyImg from "../../styles/resources/images/dummy_food_img.png";
import WorkoutRecommendationCard from "../../components/cards/WorkoutRecommendationCard";
import WorkoutProgress from "../../components/cards/WorkoutProgress";
import TrackerDaySlider from "../../components/banners/TrackerDaySlider";

function WorkoutSummary() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Workout Tracker"} />
        <div className="page-headline">
          <h1>Workout Summary</h1>
        </div>
        <div className="section-wrapper">
          <TrackerDaySlider trackingDay={"Today"} />
          <div className="flex-row">
            <div className="workout-card">
              <div className="center">
                <h1>90</h1>
                <span> kcal</span>
              </div>
              <p>Bunt Today</p>
            </div>

            <div className="workout-card">
              <div className="center">
                <h1>21</h1>
                <span> mins</span>
              </div>
              <p>Spent Today</p>
            </div>

            <div className="workout-card">
              <div className="center">
                <h1>01</h1>
                <span> Workout</span>
              </div>
              <p>Completed Today</p>
            </div>
          </div>
        </div>
        <div className="article-cards-wrapper">
          <WorkoutProgress
            workoutType={"Walking"}
            workoutDuration={"2 mins"}
            completedPercentage={20}
            workoutImg={DummyImg}
          />
          <WorkoutProgress
            workoutType={"Walking"}
            workoutDuration={"2 mins"}
            completedPercentage={100}
            workoutImg={DummyImg}
          />
        </div>
      </div>
    </>
  );
}

export default WorkoutSummary;
