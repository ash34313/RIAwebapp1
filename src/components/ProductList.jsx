import React from 'react';

const ProductList = ({ products, addToCart, onViewDetails }) => {
  return (
    <div className="product-page">
      <h2 className="page-title">Hardware Inventory</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image_url} 
              alt={`Photo of ${product.name} security hardware`} 
              className="product-image"
              loading="lazy"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <div className="card-actions">
                <button 
                  className="btn-secondary" 
                  onClick={() => onViewDetails(product)}
                  aria-label={`View details for ${product.name}`}
                >
                  Specs
                </button>
                <button 
                  className="btn-primary" 
                  onClick={() => addToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;