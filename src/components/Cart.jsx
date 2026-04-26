export default function Cart({ cart, setCart, setView }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="card">
      <h2>Secure Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your hardware cart is empty.</p>
      ) : (
        <>
          <table className="admin-table">
            <thead>
              <tr><th>Hardware Item</th><th>Price</th><th>Action</th></tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button onClick={() => setCart(cart.filter((_, i) => i !== idx))} style={{ backgroundColor: '#e74c3c', color: 'white' }}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => setView('checkout')} style={{ padding: '15px 30px' }}>
              Proceed to Secure Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}