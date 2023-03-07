import { Button } from "antd";

function Introduction() {
  return (
    <>
      <img
        className="intro-hero-img"
        src={require("../../styles/resources/images/intro_screen_hero.png")}
      />
      <div className="contents">
        <div className="page-headline">
          <h1 className="display">Make your Lifestyle Healthier</h1>
          <p>
            You are not alone! <br />
            We'll help you along your journey...
          </p>
        </div>
        <div className="btn-wrapper">
          <Button type="primary" size="large">
            Sign in as a Patient
          </Button>
          <Button type="default" size="large">
            Sign in as a Consultant
          </Button>
          <Button type="link" size="large">
            <span style={{ color: "#575757", marginRight: "0.37rem" }}>
              Using already?
            </span>
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default Introduction;
