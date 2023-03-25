import RecommendLabel from "../../components/banners/RecommendLabel";
import ReturnButton from "../../components/buttons/ReturnButton";
import CalorieDonutCard from "../../components/data_display/CalorieDonutCard";
import Statistics from "../../components/data_display/Statistics";

function MealAnalysis() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Nutrition Tracker"} />
        <div className="page-headline">
          <h1>Breakfast</h1>
        </div>
        <div className="rec-img-container">
          <img
            src={require("../../styles/resources/images/dummy_food_img.png")}
          />
          <RecommendLabel labelType={"recommended"} />{" "}
          {/* If not pass 'not-recommended' */}{" "}
          {/* images and label handled in stylesheet '_banners' */}
        </div>
        <div className="flex-row">
          <Statistics
            statValue={"620"}
            sup={"kcal"}
            statLabel={"Total Calories Identified"}
          />
          <Statistics
            statValue={"600"}
            sup={"kcal"}
            statLabel={"Recommended Amount"}
          />
        </div>
        <div className="flex-row">
          <CalorieDonutCard
            nutritionType={"Carbohydrate"}
            sup={"kcal"}
            statValue={"300"}
          />
          <CalorieDonutCard
            nutritionType={"Protein"}
            sup={"kcal"}
            statValue={"120"}
          />
        </div>
        <div className="flex-row">
          <CalorieDonutCard
            nutritionType={"Vitamin"}
            sup={"kcal"}
            statValue={"80"}
          />
          <CalorieDonutCard
            nutritionType={"Iron"}
            sup={"kcal"}
            statValue={"100"}
          />
        </div>
      </div>
    </>
  );
}

export default MealAnalysis;
