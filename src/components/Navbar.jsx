export default function Navbar({ setView, cartCount, session, isAdmin, handleLogout }) {
  return (
    <nav>
      <div onClick={() => setView('home')} style={{ cursor: 'pointer' }}>
        <strong>Securo WebStore</strong>
      </div>
      <div>
        <a href="#" onClick={() => setView('home')}>About Us</a>
        <a href="#" onClick={() => setView('products')}>Products</a>
        <a href="#" onClick={() => setView('cart')}>Cart ({cartCount})</a>
        
        {session ? (
          <>
            <a href="#" onClick={() => setView('profile')}>Profile</a>
            {isAdmin && <a href="#" onClick={() => setView('admin')} style={{ color: 'var(--primary-mint)' }}>[ADMIN]</a>}
            <a href="#" onClick={handleLogout} style={{ color: '#e74c3c' }}>Logout</a>
          </>
        ) : (
          <>
            <a href="#" onClick={() => setView('register')}>Sign Up</a>
            <a href="#" onClick={() => setView('auth')}>Login</a>
          </>
        )}
      </div>
    </nav>
  );
}