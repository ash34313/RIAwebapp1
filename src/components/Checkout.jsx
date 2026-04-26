import { useState } from 'react';

export default function Checkout({ cart, total, onOrderComplete }) {
  const [address, setAddress] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment Securely Processed for $${total.toFixed(2)}!`);
    onOrderComplete(); 
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>🔒 Secure Checkout</h2>
      <p>Confirm your hardware shipment details.</p>
      
      <div className="order-summary-mini">
        {cart.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}
        <hr />
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>

      <form onSubmit={handlePayment} style={{ marginTop: '20px' }}>
        <label>Shipping Address</label>
        <textarea 
          required 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          placeholder="Enter the secure delivery location..."
        />
        
        <label>Payment Method</label>
        <div className="card-mock" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
          <span>💳 Card ending in **** 4242</span>
        </div>

        <button type="submit" className="checkout-btn" style={{ width: '100%', marginTop: '20px' }}>
          Finalize Security Purchase
        </button>
      </form>
    </div>
  );
}