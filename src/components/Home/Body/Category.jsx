import React from "react";

const Category = () => {
  return (
    <div className="category-box">
      <h2>
        MORE TO <span>EXPLORE</span>
      </h2>
      <div className="category-item">
        <img src="./img/women.jfif" alt="" />
        <button type="button" className="category-btn">
          Women
        </button>
      </div>
      <div className="category-item">
        <img src="./img/men.jfif" alt="" />
        <button type="button" className="category-btn">
          Men
        </button>
      </div>
      <div className="category-item">
        <img src="./img/kid.jfif" alt="" />
        <button type="button" className="category-btn">
          Accessories
        </button>
      </div>
    </div>
  );
};

export default Category;
