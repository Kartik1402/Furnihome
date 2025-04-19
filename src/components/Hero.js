import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/images/main.png" alt="Modern living room with plant and chair" />
          </div>
          <div className="hero-text">
            <span className="label">New Arrival</span>
            <h1>Discover Our New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="btn btn-primary">BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
