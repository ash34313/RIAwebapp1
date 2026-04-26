export default function Profile({ user }) {
  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
      <div className="card" style={{ flex: 1, textAlign: 'center' }}>
        <span className="secure-indicator">✓ Identity Verified</span>
        <div style={{ margin: '20px 0' }}>
          <img 
            src={user.user_metadata.avatar_url || "https://via.placeholder.com/150"} 
            alt="User" 
            style={{ borderRadius: '50%', border: '4px solid var(--primary-mint)', width: '150px' }} 
          />
        </div>
        <h2>{user.user_metadata.full_name || 'Security Specialist'}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <button className="btn-link" style={{ marginTop: '15px', width: '100%' }}>Update Profile</button>
      </div>

      <div className="card" style={{ flex: 2 }}>
        <h3>Recent Order History</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#SEC-8821</td>
              <td><span style={{ color: 'var(--primary-mint)', fontWeight: 'bold' }}>Shipped</span></td>
              <td>Feb 20, 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}