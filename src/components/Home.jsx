export default function Home({ setView }) {
  return (
    <>
      <div className="hero-section">
        <h1>Defend Your Digital Life</h1>
        <p>Welcome to Securo WebStore. We specialize in physical hardware designed to protect your data and privacy.</p>
      </div>
      <div className="card">
        <span className="secure-indicator">✓ System Status: Hardened</span>
        <h3>Direct Support</h3>
        <p>Email: ops@securowebstore.com</p>
        <button onClick={() => setView('products')}>Browse Hardware</button>
      </div>
    </>
  );
}