import { useState } from 'react';
import { registerUser } from './logic';

export default function Register({ setView }) {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', address: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData.email, formData.password, formData.name, formData.address);
            alert("Verification email sent!");
            setView('auth');
        } catch (err) { alert(err.message); }
    };

    return (
        <div className="container" style={{maxWidth: '500px'}}>
            <div className="card">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input type="text" required onChange={e => setFormData({...formData, name: e.target.value})} />
                    <label>Email</label>
                    <input type="email" required onChange={e => setFormData({...formData, email: e.target.value})} />
                    <label>Shipping Address</label>
                    <textarea onChange={e => setFormData({...formData, address: e.target.value})} />
                    <label>Password</label>
                    <input type="password" required onChange={e => setFormData({...formData, password: e.target.value})} />
                    <button type="submit" style={{width: '100%'}}>Register</button>
                </form>
            </div>
        </div>
    );
}