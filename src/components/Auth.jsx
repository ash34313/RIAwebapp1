import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { loginUser } from './logic';

export default function Auth({ setView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
    } catch (err) {
      alert("Authentication Error: " + err.message);
    }
  };

  const handleGithubLogin = async () => {
    await supabase.auth.signInWithOAuth({ 
      provider: 'github',
      options: { redirectTo: window.location.origin }
    });
  };

  return (
    <div className="card" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Secure Access</h2>
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px' }}>
        Please verify your credentials to access the hardware catalog.
      </p>

      <form onSubmit={handleEmailLogin}>
        <label>Registry Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
        <label>Access Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="••••••••"
          required 
        />
        
        <button type="submit" style={{ width: '100%', marginBottom: '15px' }}>
          Sign In
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p style={{ fontSize: '0.9rem' }}>
          New to Securo? <a href="#" onClick={() => setView('register')} style={{ color: 'var(--primary-mint)', fontWeight: 'bold' }}>Register Account</a>
        </p>
      </div>

      <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '20px 0' }} />
      
      <button 
        onClick={handleGithubLogin} 
        style={{ width: '100%', backgroundColor: 'var(--dark-slate)', color: 'white' }}
      >
        Login with GitHub
      </button>
    </div>
  );
}