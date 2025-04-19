import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Furniro.</h2>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          
          <div className="footer-links">
            <div className="links-column">
              <h3>Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="links-column">
              <h3>Help</h3>
              <ul>
                <li><a href="#payment">Payment Options</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#privacy">Privacy Policies</a></li>
              </ul>
            </div>
            
            <div className="newsletter">
              <h3>Newsletter</h3>
              <div className="subscribe-form">
                <input type="email" placeholder="Enter your email address..." />
                <button className="btn-subscribe">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>2023 Furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;