import ReturnButton from "../../components/buttons/ReturnButton";
import { Progress } from "antd";
import TrackerButton from "../../components/buttons/TrackerButton";
import WorkoutRecommendationCard from "../../components/cards/WorkoutRecommendationCard";
import sampleimg from "../../styles/resources/images/dummy_food_img.png";
import TrackerDaySlider from "../../components/banners/TrackerDaySlider";
import CarouselCard from "../../components/cards/CarouselCard";

function WorkoutTracker() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Workout Tracker</h1>
        </div>
        <TrackerDaySlider trackingDay={"Today"} />
        <div className="flex-row">
          <Progress
            className="nutrition-donut-chart"
            type="circle"
            percent={75}
            format={() => "50"}
          />
          <div className="flex-col">
            <div className="workout-card">
              <h1>
                150<span> mins</span>
              </h1>
              <p>Weekly Goal</p>
            </div>
            <div className="workout-card">
              <h1>
                2<span> days</span>
              </h1>
              <p>Exercised</p>
            </div>
          </div>
        </div>
        <div className="other-exercises">
          <img className="plus-icon" />
          <p>Other Exercises Performed</p>
        </div>
        <div className="section-wrapper">
          <h4>Workout Plans Tailored for You</h4>
          <CarouselCard
            carouselCardSubject={"Heroic Aerobic"}
            carouselCardImg={sampleimg}
          />
          {/*
          <div className="workout-plans-wrapper">
            <WorkoutRecommendationCard
              workoutImg={sampleimg}
              workoutRecommendation={"Heroic Aerobics"}
              workoutDuration={"30"}
            />
            <WorkoutRecommendationCard
              workoutImg={sampleimg}
              workoutRecommendation={"Heroic Aerobics"}
              workoutDuration={"30"}
            />
            <WorkoutRecommendationCard
              workoutImg={sampleimg}
              workoutRecommendation={"Heroic Aerobics"}
              workoutDuration={"30"}
            />
          </div>
            */}
        </div>
        <div className="section-wrapper">
          <h4>Weekly Workout Summary</h4>
          {/* Add workout summary barcharts here */}
        </div>
        {/*
        <div className="section-wrapper">
          <h4>Recommended Exercises</h4>
          <div className="rec-exe-wrapper">
            <TrackerButton
              buttonLabel={"Cycling"}
              buttonIcon={"cycling-icon"}
            />
            <TrackerButton
              buttonLabel={"Running"}
              buttonIcon={"running-icon"}
            />
            <TrackerButton
              buttonLabel={"Weight Lifting"}
              buttonIcon={"weight-lifting-icon"}
            />
          </div>
        </div>
        */}
      </div>
    </>
  );
}

export default WorkoutTracker;
