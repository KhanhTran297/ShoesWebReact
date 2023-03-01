import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliders } from "../../../redux/slice/slider";

const Slider = () => {
  //hook
  const [count, setCount] = useState(0);
  const selector = useSelector((state) => state.sliders);
  const sliders = selector.sliders;
  const dispatch = useDispatch();
  //methods
  const handleNextSlide = () => {
    setCount((count) => (count + 1) % sliders.length);
  };
  const handlePrevSlide = () => {
    setCount((count) => (count - 1 + sliders.length) % sliders.length);
  };
  useEffect(() => {
    dispatch(getSliders());
  }, []);
  return (
    <div className="sliderBox">
      {sliders.length > 0 ? (
        <div className="slider">
          <div className="slider-container active">
            <div className="slide">
              <div className="content">
                <span>{sliders[count].category}</span>
                <h3>{sliders[count].title}</h3>
                <p>{sliders[count].des}</p>
                <a href="" className="slider-btn">
                  MORE
                </a>
              </div>
              <div className="img">
                <img
                  src={sliders[count].img}
                  alt=""
                  className="img-shoe zoom"
                  data-magnify-src="./img/slide/1.png"
                />
              </div>
            </div>
          </div>
          <div className="previous-slide" onClick={handlePrevSlide}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="next-slide" onClick={handleNextSlide}>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Slider;
