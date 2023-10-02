import Slider from "react-slick";
import quotesIcon from "./quotes.svg";
import comments from "./comments-data.json";
import nextArrow from "./arrowsSlider/nextArrow.svg";
import prevArrow from "./arrowsSlider/prevArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CommentSlider.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-next slick-arrow" onClick={onClick}>
      <svg className="sliderIcon" width="10" height="15">
        <use href={nextArrow + "#icon-nextArrow"}></use>
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-prev slick-arrow" onClick={onClick}>
      <svg className="sliderIcon" width="10" height="15">
        <use href={prevArrow + "#icon-prevArrow"}></use>
      </svg>
    </button>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CommentSlider = () => {
  return (
    <div className="sliderWrapper">
      <Slider {...settings}>
        {comments.map((comment) => (
          <div className="sliderContainer" key={comment.name}>
            <svg className="quotesIcon" width="31" height="25">
              <use href={quotesIcon + "#icon-quotes"}></use>
            </svg>
            <p className="loginPageText">{comment.text}</p>
            <p className="authorText">{comment.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommentSlider;
