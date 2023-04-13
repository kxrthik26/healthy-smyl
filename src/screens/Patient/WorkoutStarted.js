import { Button } from "antd";
import ReturnButton from "../../components/buttons/ReturnButton";
import DummyImg from "../../styles/resources/images/dummy_food_img.png";
import { useState } from "react";

function WorkoutStarted() {
  //Play/Pause change on click
  const [isClicked, setIsClicked] = useState(false);

  const handlePlayButton = () => {
    setIsClicked(!isClicked);
  };

  const playButtonIcons = isClicked ? "play-icon" : "pause-icon";

  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Workout Plan"} />
        <div className="page-headline">
          <h1>Heroic Aerobic</h1>
        </div>
        <div className="workout-type">
          <h4>Walking</h4>
          <p>20 minutes</p>
        </div>
        <img className="workout-preview-img" src={DummyImg} />
        <Button type="primary" size="large">
          Start
        </Button>
        <div className="workout-started">
          <div className="workout-play-controls">
            <img className="previous-icon" />
            <img className={playButtonIcons} onClick={handlePlayButton} />
            <img className="next-icon" />
          </div>
          <div className="workout-timer">
            <h1>15:25</h1>
            <p>Remaining</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkoutStarted;
