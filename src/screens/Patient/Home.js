import HomeAvatar from "../../components/avatars/HomeAvatar";
import QuoteBanner from "../../components/banners/QuoteBanner";
import TrackerButton from "../../components/buttons/TrackerButton";

function Home() {
  return (
    <>
      <div className="contents">
        <HomeAvatar date={"28 Jan 2023"} userName={"Sbamuni"} />
        <QuoteBanner
          quoteOTD={
            "We cannot solve problems with the kind of thinking we employed when we came up with them."
          }
        />
        <div className="section-wrapper">
          <h4>Trackers</h4>
          <div className="flex-row">
            <TrackerButton
              buttonLabel={"Nutrition Tracker"}
              buttonIcon={"leaf-icon"}
            />
            <TrackerButton
              buttonLabel={"Workout Tracker"}
              buttonIcon={"gym-icon"}
            />
            <TrackerButton
              buttonLabel={"Medicine Tracker"}
              buttonIcon={"pill-icon"}
            />
          </div>
        </div>
        <div className="sectionwrapper">
          <h4>Awards</h4>
        </div>
        <div className="sectionwrapper">
          <h4>Articles & Blogs</h4>
        </div>
      </div>
    </>
  );
}

export default Home;
