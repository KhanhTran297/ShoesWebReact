import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColorAPI } from "../../../api/shoes";
import { getShoes, getShoesColor } from "../../../redux/slice/shoes";

const BestSeller = () => {
  //hook
  const selector = useSelector((state) => state.shoes);
  const sizeBoxRef = useRef(null);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  //variables
  const shoesColor = selector.shoes;
  const listshoeimg = [
    shoesColor.img1,
    shoesColor.img2,
    shoesColor.img3,
    shoesColor.img4,
  ];
  //method
  const handleSize = (e) => {
    var BoxArray = Array.from(sizeBoxRef.current.children);
    BoxArray.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.toggle("active");
  };
  const handleSwapImg1 = () => {
    setCount((count) => (count = 0));
  };
  const handleSwapImg2 = () => {
    setCount((count) => (count = 1));
  };
  const handleSwapImg3 = () => {
    setCount((count) => (count = 2));
  };
  const handleSwapImg4 = () => {
    setCount((count) => (count = 3));
  };
  const handleChangeRedColor = () => {
    dispatch(getShoesColor(1));
  };
  const handleChangeGreenColor = () => {
    dispatch(getShoesColor(2));
  };
  const handleChangeBlackColor = () => {
    dispatch(getShoesColor(3));
  };
  useEffect(() => {
    dispatch(getShoesColor(1));
  }, []);
  return (
    <div className="bestSellerBox">
      {shoesColor ? (
        <div className="bestSellerProduct">
          <h1 className="title">
            BEST <span>SELLER</span>
          </h1>
          <div className="bestSellerProductContainer">
            <div className="bestSellerProductItem">
              <div className="imgBox">
                <div className="imgBoxContent">
                  <div className="img">
                    <img
                      src={shoesColor.img1}
                      alt=""
                      className="imgFeature1"
                      onClick={handleSwapImg1}
                    />
                  </div>
                  <div className="img">
                    <img
                      src={shoesColor.img2}
                      alt=""
                      className="imgFeature1"
                      onClick={handleSwapImg2}
                    />
                  </div>
                  <div className="img">
                    <img
                      src={shoesColor.img3}
                      alt=""
                      className="imgFeature1"
                      onClick={handleSwapImg3}
                    />
                  </div>
                  <div className="img">
                    <img
                      src={shoesColor.img4}
                      alt=""
                      className="imgFeature1"
                      onClick={handleSwapImg4}
                    />
                  </div>
                </div>
              </div>
              <div className="bestSellerProductBox">
                <div className="productImg">
                  <div className="productImgContent">
                    <img src={listshoeimg[count]} alt="" className="bigImg1" />
                  </div>
                </div>
                <div className="productContent">
                  <h3 className="productName">{shoesColor.title}</h3>
                  <div className="sizeBox">
                    <p>Size</p>

                    <div className="sizeBoxoption" ref={sizeBoxRef}>
                      <div
                        className="sizeOption size37 active"
                        onClick={handleSize}
                      >
                        37
                      </div>
                      <div className="sizeOption size38" onClick={handleSize}>
                        38
                      </div>
                      <div className="sizeOption size39" onClick={handleSize}>
                        39
                      </div>
                      <div className="sizeOption size40" onClick={handleSize}>
                        40
                      </div>
                      <div className="sizeOption size41" onClick={handleSize}>
                        41
                      </div>
                    </div>
                  </div>
                  <p>{shoesColor.des}</p>
                  <div className="colorBox">
                    <p>Color</p>
                    <div className="colorBoxOption">
                      <div
                        className="colorOption color1 "
                        id="red"
                        onClick={handleChangeRedColor}
                      ></div>
                      <div
                        className="colorOption color2"
                        id="green"
                        onClick={handleChangeGreenColor}
                      ></div>
                      <div
                        className="colorOption color3"
                        id="black"
                        onClick={handleChangeBlackColor}
                      ></div>
                    </div>
                  </div>
                  <div className="price">
                    <div className="price">
                      {shoesColor.price} <span>{shoesColor.pricesale}</span>
                    </div>
                    <button className="cartBtn">ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default BestSeller;
