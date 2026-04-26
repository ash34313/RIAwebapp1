import { useState, useEffect, lazy, Suspense } from 'react';
import { supabase } from './supabaseClient';
import { createOrder } from './logic';
import Navbar from './components/Navbar';
import Home from './components/Home';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Auth = lazy(() => import('./components/Auth'));
const Register = lazy(() => import('./components/Register'));
const Profile = lazy(() => import('./components/Profile'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));

const Loading = () => (
  <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
    <div className="secure-indicator">Decrypting Secure Interface...</div>
  </div>
);

function App() {
  const [session, setSession] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home');

  const adminEmail = 'ashrensau@gmail.com'; 
  const isAdmin = session?.user?.email === adminEmail;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));

    const fetchProducts = async () => {
      const { data } = await supabase.from('products').select('*');
      if (data) setProducts(data);
    };

    fetchProducts();
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCart([]);
    setView('home');
  };

  const handleOrderComplete = async (address) => {
    if (!session) { setView('auth'); return; }
    try {
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      await createOrder(session.user.id, cart, total);
      setCart([]);
      alert("Order Securely Placed!");
      setView('profile');
    } catch (err) { alert("Transaction Error: " + err.message); }
  };

  return (
    <>
      <Navbar setView={setView} cartCount={cart.length} session={session} isAdmin={isAdmin} handleLogout={handleLogout} />
      
      <main className="container" role="main">
        <Suspense fallback={<Loading />}>
          {view === 'home' && <Home setView={setView} />}
          {view === 'register' && <Register setView={setView} />}
          {view === 'products' && (
            <ProductList 
              products={products} 
              addToCart={(p) => setCart([...cart, p])} 
              onViewDetails={(p) => { setSelectedProduct(p); setView('details'); }} 
            />
          )}
          {view === 'details' && <ProductDetail product={selectedProduct} addToCart={(p) => setCart([...cart, p])} setView={setView} />}
          {view === 'auth' && !session && <Auth setView={setView} />}
          {view === 'profile' && session && <Profile user={session.user} />}
          {view === 'cart' && <Cart cart={cart} setCart={setCart} setView={setView} />}
          {view === 'checkout' && <Checkout cart={cart} total={cart.reduce((s, i) => s + i.price, 0)} onOrderComplete={handleOrderComplete} />}
          {view === 'admin' && isAdmin && <AdminDashboard />}
        </Suspense>
      </main>

      <footer>
        <div className="container" style={{ textAlign: 'center' }}>
          <p>&copy; 2026 Securo WebStore | System Status: Verified</p>
        </div>
      </footer>
    </>
  );
}

export default App;