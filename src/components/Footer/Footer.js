import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const footerPropTypes = {
  className: PropTypes.string,
};

const Footer = ({ className }) => (
  <div className={className}>
    <div className="footer__container">
      <p className="footer__p">
        <a href="https://github.com/khaizotac" rel="noopener noreferrer" target="_blank">
          @benjamin pham
        </a>
      </p>
    </div>
  </div>
);

Footer.propTypes = footerPropTypes;

export default Footer;
