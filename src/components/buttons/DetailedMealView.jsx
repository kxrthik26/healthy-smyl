const DetailedMealView = ({ mealType, calorieAmt }) => {
  return (
    <div className="detailed-meal-view-btn">
      <div>
        <p className="meal-type">{mealType}</p>
        <p className="cal-amt">{calorieAmt}</p>
      </div>
      <img className="return-icon" />
    </div>
  );
};

export default DetailedMealView;
