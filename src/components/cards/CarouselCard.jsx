const CarouselCard = ({ carouselCardSubject, carouselCardImg }) => {
  return (
    <div className="carousel-card">
      <img src={carouselCardImg} alt="carousel_img" />
      <p>{carouselCardSubject}</p>
    </div>
  );
};

export default CarouselCard;
