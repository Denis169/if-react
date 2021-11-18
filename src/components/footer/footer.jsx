import React from 'react';

import './footer.scss';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="menu-footer">
        <div className="menu-footer__ref">
          <div className="menu-footer__list">
            <a href="https://intellectfox.by/" className="menu-footer__mobile-link">About</a>
            <h3 className="menu-footer__header">About</h3>
            <a href="https://intellectfox.by/" className="menu-footer__link">How Triphouse works</a>
            <a href="https://intellectfox.by/" className="menu-footer__link">Careers</a>
            <a href="https://intellectfox.by/" className="menu-footer__link">Privacy</a>
            <a href="https://intellectfox.by/" className="menu-footer__link">Terms</a>
          </div>
          <div className="menu-footer__list">
            <a href="https://intellectfox.by/" className="menu-footer__mobile-link">Property types</a>
            <h3 className="menu-footer__header">Property types</h3>
            <a href="https://intellectfox.by/" className="menu-footer__link">Guest houses</a>
            <a href="https://intellectfox.by/" className="menu-footer__link">Hotels</a>
            <a href="https://intellectfox.by/" className="menu-footer__link">Appartments</a>
            <a href="https://intellectfox.by/" className="menu-footer__link">Villas</a>
            <a href="https://intellectfox.by/" className="menu-footer__link">Holiday homes</a>
            <a href="https://intellectfox.by/" className="menu-footer__link">Hostels</a>
          </div>
          <div className="menu-footer__list">
            <a href="https://intellectfox.by/" className="menu-footer__mobile-link">Support</a>
            <h3 className="menu-footer__header">Support</h3>
            <a href="https://intellectfox.by/" className="menu-footer__link">Contact Customer Service</a>
            <a href="https://intellectfox.by/" className="menu-footer__link">FAQ</a>
          </div>
        </div>
        <p className="menu-footer__copyrate">&copy; 2020 Triphouse, Inc. All rights reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;
