/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/Slide.css'

function Slide({cards}) {
  const settings = {
    className: "center",
    dots:true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 8,
    swipeToSlide: true,
    autoplay:true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="card-item" key={index}>
            {card}
          </div>
          ))}
      </Slider>
    </div>
  );
}

export default Slide;
