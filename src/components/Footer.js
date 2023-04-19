import React from 'react';
import "./Footer.css";

const Footer = () => {
  const date = new Date()
  let currentYear = date.getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>
          Copyrights Reserved {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
