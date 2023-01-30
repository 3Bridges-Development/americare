import React from "react";

function Footer() {
  return (
    <div className="footer-container text-center bg-red-200 mt-5">
      <div className="text-lg font-bold">
        Americare &copy; Copyright {new Date().getFullYear()}
      </div>
      <div className="contact">
        <span>Email: lorem@gmail.com</span>
        <br />
        <span>Phone: (123)456.7890</span>
      </div>
      <a href="/" className="contact-form">
        Contact Us
      </a>
    </div>
  );
}

export default Footer;
