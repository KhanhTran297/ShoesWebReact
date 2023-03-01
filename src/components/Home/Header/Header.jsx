import React, { useState } from "react";
import { useDispatch } from "react-redux";
const Header = () => {
  //hook
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();
  //method
  const handleOnOfUseroption = () => {
    setUser((prevState) => !prevState);
  };
  return (
    <header>
      <div className="box">
        <div className="logo">
          <a href="" className="logo-box">
            <img src="./img/logo.jpg" alt="" />
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="products.html">PRODUCT</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">SHOP</a>
            </li>
          </ul>
        </div>
        <div className="search">
          <form action="" className="search-box">
            <input
              type="text"
              className="search-text"
              placeholder="Tim Kiem"
              required
            />
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="shop">
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
        <div className="user" onClick={handleOnOfUseroption}>
          <a className="user-box">
            <img src="./img/namngu.jpg" alt="" />
          </a>
          {user ? (
            <div className="user-dropdown">
              <a href="">Thông tin cá nhân</a>
              <a href="">Mục yêu Thích</a>
              <a href="">Lịch sử giao dịch</a>
              <a href="">Log out</a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
