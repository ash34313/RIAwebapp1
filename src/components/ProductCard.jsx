export default function ProductCard({ product, addToCart, onViewDetails }) {
  return (
    <div className="card">
      <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${product.price.toFixed(2)}</p>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button onClick={() => onViewDetails(product)} style={{ flex: 1, backgroundColor: 'var(--dark-slate)', color: 'white' }}>
          Details
        </button>
        <button onClick={() => addToCart(product)} style={{ flex: 1 }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}