import ReturnButton from "../../components/buttons/ReturnButton";
import { Button } from "antd";
import DummyImg from "../../styles/resources/images/dummy_food_img.png";
import WorkoutRecommendationCard from "../../components/cards/WorkoutRecommendationCard";

function WorkoutPlan() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Workout Tracker"} />
        <div className="page-headline">
          <h1>Heroic Aerobic</h1>
        </div>
        <Button type="primary" size="medium">
          Start Plan
        </Button>
        <div className="meal-cards-warpper">
          <WorkoutRecommendationCard
            workoutImg={DummyImg}
            workoutRecommendation={"Walking"}
            workoutDuration={"20 minutes"}
          />
          <WorkoutRecommendationCard
            workoutImg={DummyImg}
            workoutRecommendation={"Walking"}
            workoutDuration={"20 minutes"}
          />
          <WorkoutRecommendationCard
            workoutImg={DummyImg}
            workoutRecommendation={"Walking"}
            workoutDuration={"20 minutes"}
          />
          <WorkoutRecommendationCard
            workoutImg={DummyImg}
            workoutRecommendation={"Walking"}
            workoutDuration={"20 minutes"}
          />
          <WorkoutRecommendationCard
            workoutImg={DummyImg}
            workoutRecommendation={"Walking"}
            workoutDuration={"20 minutes"}
          />
        </div>
      </div>
    </>
  );
}

export default WorkoutPlan;
