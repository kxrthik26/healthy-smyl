import ReturnButton from "../../components/buttons/ReturnButton";
import React from "react";
import MealRecommendationCard from "../../components/cards/MealRecommendationCard";
import DummyImg from "../../styles/resources/images/dummy_food_img.png";

function MealRecommendation() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Nutrition Tracker"} />
        <div className="page-headline">
          <h1>Meal Recommendation</h1> {/* Common Template for all 3 meals */}
        </div>
        <div className="meal-cards-warpper">
          <MealRecommendationCard
            mealImg={DummyImg}
            mealRecommendation={"Salad"}
            calorieInfo={"430"}
          />
          <MealRecommendationCard
            mealImg={DummyImg}
            mealRecommendation={"Salad"}
            calorieInfo={"430"}
          />
        </div>
      </div>
    </>
  );
}

export default MealRecommendation;
