import { useState } from 'react';

export default function ProductDetail({ product, addToCart, setView }) {
  const [userReview, setUserReview] = useState('');
  const [stars, setStars] = useState('5 Stars');

  if (!product) return <p>Initializing security specifications...</p>;

  return (
    <div className="product-detail-container">
      <button className="back-link" onClick={() => setView('products')}>
        ← Return to Catalog
      </button>

      <div className="card detail-flex" style={{ display: 'flex', gap: '40px', padding: '40px' }}>
        <div className="detail-image" style={{ flex: '1' }}>
          <img src={product.image_url} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        
        <div className="detail-info" style={{ flex: '1' }}>
          <h1>{product.name}</h1>
          <p className="category-label"><em>Category: {product.category}</em></p>
          <h2 className="price-tag">${product.price.toFixed(2)}</h2>
          <hr />
          <p className="description-text">{product.description}</p>
          <p><strong>Security Rating:</strong> {product.rating || '4.5'}/5</p>
          
          <button className="checkout-btn" onClick={() => addToCart(product)} style={{ width: '100%', marginTop: '20px' }}>
            Add to Securo Cart
          </button>
        </div>
      </div>

      <div className="card feedback-section" style={{ marginTop: '20px' }}>
        <h3>User Ratings & Feedback</h3>
        <select value={stars} onChange={(e) => setStars(e.target.value)} style={{ width: '100%', marginBottom: '10px' }}>
          <option>5 Stars</option><option>4 Stars</option><option>3 Stars</option><option>2 Stars</option><option>1 Star</option>
        </select>
        <textarea 
          placeholder="Submit technical feedback..." 
          value={userReview} 
          onChange={(e) => setUserReview(e.target.value)}
          style={{ width: '100%', height: '80px' }}
        />
        <button onClick={() => alert('Review Logged')}>Submit Review</button>
      </div>
    </div>
  );
}