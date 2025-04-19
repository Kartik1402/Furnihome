import React from 'react';

function Products() {
  const products = [
    { id: 1, name: 'Syltherine', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', discount: '30%', image: '/images/Images (1).png' },
    { id: 2, name: 'Leviosa', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', image: '/images/Images (2).png' },
    { id: 3, name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', image: 'images/Images (3).png' },
    { id: 4, name: 'Respira', desc: 'Outdoor bar table and stool', price: 'Rp 500.000', tag: 'New', image: 'images/Images (4).png' },
    { id: 5, name: 'Grifo', desc: 'Night lamp', price: 'Rp 1.500.000', image: 'images/Images (5).png' },
    { id: 6, name: 'Muggo', desc: 'Small mug', price: 'Rp 150.000', tag: 'New', image: 'images/Images (6).png' },
    { id: 7, name: 'Pingky', desc: 'Cute bed set', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', image: 'images/Images (7).png' },
    { id: 8, name: 'Potty', desc: 'Minimalist flower pot', price: 'Rp 500.000', tag: 'New', image: 'images/Images.png' },
  ];

  return (
    <section className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.discount && <div className="badge discount">{product.discount}</div>}
                {product.tag && <div className="badge tag">{product.tag}</div>}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="product-price">
                  <span className="current-price">{product.price}</span>
                  {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                </div>
              </div>
              {product.id === 2 && (
                <div className="product-actions">
                  <button className="btn btn-secondary">Add to cart</button>
                  <div className="action-icons">
                    <button><i className="icon">↗</i> Share</button>
                    <button><i className="icon">⚖</i> Compare</button>
                    <button><i className="icon">❤</i> Like</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="show-more">
          <button className="btn btn-outline">Show More</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
