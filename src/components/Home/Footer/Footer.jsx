import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2>GET HELP</h2>
          <h2>BECOME A MEMBER</h2>
          <h2>SIGN UP FOR EMAIL</h2>
          <h2>SEND US FEEDBACK</h2>
        </div>
        <div className="footer-heading footer-2">
          <h2>GET HELP</h2>
          <a href="#">Order Status</a>
          <a href="#">Delivery</a>
          <a href="#">Returns</a>
          <a href="#">Payment Options</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-heading footer-3">
          <h2>ABOUT US</h2>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Investors</a>
          <a href="#">Sustainability</a>
        </div>
        <div className="footer-email-form">
          <h2>Join our newsletter</h2>
          <input
            type="email"
            placeholder="Enter your email address"
            id="footer-email"
          />
          <input type="submit" value="Sign up" id="footer-email-btn" />
        </div>
        <div className="footer-payment-container">
          <h2>PAYMENT</h2>
          <img width="250px" src="./img/footer/payment.jpg" alt="" />
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-container">
          <p>©2023 SeekYourShoes. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
