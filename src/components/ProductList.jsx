import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, addToCart, onViewDetails }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog-container">
      <header style={{ marginBottom: '30px' }}>
        <h1>Hardware Catalog</h1>
        <p>Browse our selection of hardened devices designed to protect your digital experience.</p>
        
        <div className="search-container" style={{ background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', marginTop: '20px' }}>
          <label htmlFor="searchBar"><strong>Locate Hardware:</strong></label>
          <input 
            type="text" 
            id="searchBar" 
            placeholder="Search by name (e.g., 'VPN', 'Token', 'SSD')..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            style={{ 
              width: '100%', 
              padding: '12px', 
              marginTop: '10px', 
              border: '1px solid var(--primary-mint)', 
              borderRadius: '4px', 
              boxSizing: 'border-box' 
            }}
          />
        </div>
      </header>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard 
              key={p.id} 
              product={p} 
              addToCart={addToCart} 
              onViewDetails={onViewDetails} 
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#666', gridColumn: '1 / -1', padding: '40px' }}>
            No hardware found matching "{searchTerm}". Please check your security parameters.
          </p>
        )}
      </div>
    </div>
  );
}