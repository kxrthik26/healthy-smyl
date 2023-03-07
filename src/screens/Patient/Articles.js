import ReturnButton from "../../components/buttons/ReturnButton";
import ArticleCard from "../../components/cards/ArticleCard";
import DummyImg from "../../styles/resources/images/dummy_food_img.png";

function Articles() {
  return (
    <>
      <div className="contents">
        <ReturnButton returnLocationLabel={"Home"} />
        <div className="page-headline">
          <h1>Articles & Blogs</h1>
        </div>
        <div className="article-cards-wrapper">
          <ArticleCard
            articleImg={DummyImg}
            articleTitle={"Commoners Host Parade for HIV Awareness"}
            articleGlimpse={
              "Lorem ipsum dolor sit amet consectetur. Risus placerat maecenas sit penatibus a habitant. Risus placerat maecenas sit penatibus a habitant."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Articles;
