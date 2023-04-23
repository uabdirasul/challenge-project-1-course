import React from 'react';

const Footer = () => {
  let currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>
        Copyright &copy;{currentYear}
      </p>
    </footer>
  );
}

export default Footer;
