const workoutRecommendationCard = ({
  workoutImg,
  workoutRecommendation,
  workoutDuration,
}) => {
  return (
    <div className="workout-recommendation-card">
      <img src={workoutImg} />
      <p className="workout-rec">{workoutRecommendation}</p>
      <p className="workout-duration">{workoutDuration}</p>
    </div>
  );
};

export default workoutRecommendationCard;
