import { Carousel } from "antd";
import HomeAvatar from "../../components/avatars/HomeAvatar";
import QuoteBanner from "../../components/banners/QuoteBanner";
import TrackerButton from "../../components/buttons/TrackerButton";
import ArticleCard from "../../components/cards/ArticleCard";
import CarouselCard from "../../components/cards/CarouselCard";
import DummyImg from "../../styles/resources/images/dummy_food_img.png";

function Home() {
  return (
    <>
      <div className="contents">
        <HomeAvatar date={"28 Jan 2023"} userName={"Sbamuni"} points={"50"} />
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
        <div className="section-wrapper">
          <h4>Support</h4>
          <div className="flex-row">
            <a className="support-redirect-btn red-bg">
              <img className="emergency-icon" />
              Emergency Help Lines
            </a>
            <a className="support-redirect-btn purple-bg">
              <img className="help-icon" />
              Get Financial Aid
            </a>
          </div>

          <a className="support-redirect-btn green-bg">
            <img className="emergency-icon" />
            Doctor Appointment
          </a>
        </div>
        <div className="section-wrapper">
          <h4>Articles & Blogs</h4>
          <div className="article-cards-wrapper">
            <ArticleCard
              articleImg={DummyImg}
              articleTitle={"Commoners Host Parade for HIV Awareness"}
              articleGlimpse={
                "Lorem ipsum dolor sit amet consectetur. Risus placerat maecenas sit penatibus a habitant. Risus placerat maecenas sit penatibus a habitant."
              }
            />
            <ArticleCard
              articleImg={DummyImg}
              articleTitle={"Commoners Host Parade for HIV Awareness"}
              articleGlimpse={
                "Lorem ipsum dolor sit amet consectetur. Risus placerat maecenas sit penatibus a habitant. Risus placerat maecenas sit penatibus a habitant."
              }
            />
          </div>
          <a className="link-btn">See More</a>
        </div>
        <div className="flex-col">
          <h4>Motivational Testimonies</h4>
          <Carousel autoplay>
            <CarouselCard
              carouselCardImg={DummyImg}
              carouselCardSubject={"How I live with HIV as a 25 year old!"}
            />
            <CarouselCard
              carouselCardImg={DummyImg}
              carouselCardSubject={"How I live with HIV as a 25 year old!"}
            />
            <CarouselCard
              carouselCardImg={DummyImg}
              carouselCardSubject={"How I live with HIV as a 25 year old!"}
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;
