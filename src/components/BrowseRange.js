import React from 'react';

function BrowseRange() {
  return (
    <section className="browse-range" id="shop">
      <div className="container">
        <div className="section-header">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="categories">
          <div className="category-card">
            <img src="/images/dining.png" alt="Dining furniture" />
            <h3>Dining</h3>
          </div>
          <div className="category-card">
            <img src="/images/living.png" alt="Living room furniture" />
            <h3>Living</h3>
          </div>
          <div className="category-card">
            <img src="/images/bedroom.png" alt="Bedroom furniture" />
            <h3>Bedroom</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrowseRange;