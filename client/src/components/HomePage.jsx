import { useState, useEffect } from 'react';
import Slide from '../bootstrap/SlideImages';
const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showForm, setShowForm] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Error: Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Something went Wrong please try later');
      const newUser = await response.json();
      setUsers([...users, newUser]);
      setFormData({ name: '', email: '' });
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Error: Failed to delete user');
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <header className="app-header">
        <h1>Welcome to FINOVA app </h1>
        <p>Full-stack application with modern styling and routing</p>
      </header>
      <main className="main-content">
        <div className="container">
      <Slide/>
          <div className="actions-bar">
            <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Cancel' : 'Add User'}
            </button>
            <button className="btn btn-secondary" onClick={fetchUsers}>
              Refresh
            </button>
          </div>
          {showForm && (
            <div className="form-container">
              <form onSubmit={addUser} className="user-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"cd 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter user name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter user email"
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-success">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          )}
          {error && (
            <div className="alert alert-error">
              <strong>Error:</strong> {error}
              <button className="alert-close" onClick={() => setError(null)}>×</button>
            </div>
          )}
          <div className="users-section">
            <h2>Users Management</h2>
            {loading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading users...</p>
              </div>
            ) : users.length === 0 ? (
              <div className="empty-state">
                <p>No users found. Add some users to get started!</p>
              </div>
            ) : (
              <div className="users-grid">
                {users.map(user => (
                  <div key={user.id} className="user-card">
                    <div className="user-info">
                      <h3>{user.name}</h3>
                      <p>{user.email}</p>
                      <small>ID: {user.id}</small>
                    </div>
                    <div className="user-actions">
                      <button className="btn btn-danger btn-small" onClick={() => deleteUser(user.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
