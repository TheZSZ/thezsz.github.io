import React from 'react';

import '../../assets/sass/main.scss';

const Footer = () => (
  <footer id="footer" className="wrapper style1-alt">
    <div className="inner">
      <ul className="menu">
        <li>Website built w/ <a href='https://www.gatsbyjs.com/' target="_blank" rel="noopener noreferrer">Gatsby</a> and hosted on <a href='https://pages.github.com/' target="_blank" rel="noopener noreferrer">GitHub Pages</a>.</li>
        {/* <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li> */}
      </ul>
    </div>
  </footer>
);

export default Footer;
