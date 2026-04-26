import { useEffect, useState } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../components/logic';

export default function AdminDashboard() {
    const [inventory, setInventory] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [formData, setFormData] = useState({ name: '', stock_quantity: '', price: '', category: '', description: '' });

    useEffect(() => {
        refreshInventory();
    }, []);

    const refreshInventory = () => getProducts().then(setInventory);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateProduct(currentId, formData);
                alert("Hardware parameters updated.");
            } else {
                await addProduct(formData);
                alert("New hardware added to vault.");
            }
            resetForm();
            refreshInventory();
        } catch (err) { alert(err.message); }
    };

    const handleEdit = (p) => {
        setIsEditing(true);
        setCurrentId(p.id);
        setFormData({ name: p.name, stock_quantity: p.stock_quantity, price: p.price, category: p.category || '', description: p.description || '' });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Confirm deletion of this hardware node?")) {
            await deleteProduct(id);
            refreshInventory();
        }
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentId(null);
        setFormData({ name: '', stock_quantity: '', price: '', category: '', description: '' });
    };

    return (
        <div className="container" role="main" aria-labelledby="admin-title">
            <h1 id="admin-title" className="secure-indicator"> ADMINISTRATOR ACCESS ONLY</h1>
            
            <section className="card" aria-labelledby="form-heading">
                <h2 id="form-heading">{isEditing ? "Edit Hardware Specifications" : "Provision New Hardware"}</h2>
                <form onSubmit={handleSubmit} aria-label="Product management form">
                    <div style={{ display: 'grid', gap: '15px' }}>
                        <input name="name" type="text" placeholder="Hardware Name" value={formData.name} onChange={handleInputChange} required aria-label="Hardware Name" />
                        <input name="category" type="text" placeholder="Category (e.g., Security, Storage)" value={formData.category} onChange={handleInputChange} required aria-label="Category" />
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <input name="stock_quantity" type="number" placeholder="Stock Level" value={formData.stock_quantity} onChange={handleInputChange} required aria-label="Stock Quantity" />
                            <input name="price" type="number" step="0.01" placeholder="Unit Price" value={formData.price} onChange={handleInputChange} required aria-label="Unit Price" />
                        </div>
                        <textarea name="description" placeholder="Technical Specifications" value={formData.description} onChange={handleInputChange} aria-label="Hardware Description" />
                        
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button type="submit" style={{ flex: 1 }}>{isEditing ? "Apply Updates" : "Commit to Inventory"}</button>
                            {isEditing && <button type="button" onClick={resetForm} style={{ backgroundColor: 'var(--dark-slate)', color: 'white' }}>Cancel</button>}
                        </div>
                    </div>
                </form>
            </section>

            <section className="card" style={{ marginTop: '30px' }} aria-labelledby="inventory-heading">
                <h2 id="inventory-heading">Inventory Monitoring</h2>
                <table className="admin-table" aria-label="Product stock ledger">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Hardware Item</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map(p => (
                            <tr key={p.id}>
                                <td>{String(p.id).padStart(3, '0')}</td>
                                <td>{p.name}</td>
                                <td>
                                    {p.stock_quantity} 
                                    {p.stock_quantity < 10 && <span style={{ color: '#e67e22', marginLeft: '10px' }} aria-label="Low stock warning">[LOW]</span>}
                                </td>
                                <td>${Number(p.price).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => handleEdit(p)} style={{ marginRight: '5px', padding: '5px 10px' }} aria-label={`Edit ${p.name}`}>Edit</button>
                                    <button onClick={() => handleDelete(p.id)} style={{ backgroundColor: '#e74c3c', color: 'white', padding: '5px 10px' }} aria-label={`Delete ${p.name}`}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}