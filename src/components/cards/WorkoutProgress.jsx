import { Progress } from "antd";
const WorkoutProgress = ({
  workoutImg,
  workoutType,
  workoutDuration,
  completedPercentage,
}) => {
  return (
    <div className="workout-progress-card">
      <div className="content-wrapper">
        <p className="workout-type">{workoutType}</p>
        <p className="workout-duration">{workoutDuration}</p>
        <Progress percent={completedPercentage} />
      </div>
      <img src={workoutImg} />
    </div>
  );
};

export default WorkoutProgress;
