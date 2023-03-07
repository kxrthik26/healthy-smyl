const MealRecommendationCard = ({
  mealImg,
  mealRecommendation,
  calorieInfo,
}) => {
  return (
    <div className="meal-recommendation-card">
      <img src={mealImg} />
      <p className="meal-rec">{mealRecommendation}</p>
      <p className="cal-info">{calorieInfo}</p>
    </div>
  );
};

export default MealRecommendationCard;
