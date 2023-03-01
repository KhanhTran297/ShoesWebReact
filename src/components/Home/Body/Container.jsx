import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import Category from "./Category";
import NewProduct from "./NewProduct";
import SaleOff from "./SaleOff";
import Slider from "./Slider";

const Container = () => {
  return (
    <div id="container">
      <Banner></Banner>
      <Slider></Slider>
      <SaleOff></SaleOff>
      <NewProduct></NewProduct>
      <BestSeller></BestSeller>
      <Category></Category>
    </div>
  );
};

export default Container;
