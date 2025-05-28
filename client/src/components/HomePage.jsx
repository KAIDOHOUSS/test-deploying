import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showForm, setShowForm] = useState(false);
  const { language } = useLanguage();

  const translations = {
    en: {
      welcome: 'Welcome to React + Express App',
      description: 'Full-stack application with modern styling and routing',
      addUser: 'Add User',
      cancel: 'Cancel',
      refresh: 'Refresh',
      nameLabel: 'Name',
      emailLabel: 'Email',
      namePlaceholder: 'Enter user name',
      emailPlaceholder: 'Enter user email',
      addUserButton: 'Add User',
      usersManagement: 'Users Management',
      loading: 'Loading users...',
      noUsers: 'No users found. Add some users to get started!',
      error: 'Error',
      delete: 'Delete',
      fetchUsersFailed :'Failed to fetch users',
      addUsersFailed : 'Something went Wrong please try later '
    },
    ar: {
      welcome: 'مرحبًا بكم في تطبيق React + Express',
      description: 'تطبيق كامل بتصميم حديث وتوجيه',
      addUser: 'إضافة مستخدم',
      cancel: 'إلغاء',
      refresh: 'تحديث',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      namePlaceholder: 'أدخل اسم المستخدم',
      emailPlaceholder: 'أدخل بريد المستخدم الإلكتروني',
      addUserButton: 'إضافة مستخدم',
      usersManagement: 'إدارة المستخدمين',
      loading: 'جارٍ تحميل المستخدمين...',
      noUsers: 'لم يتم العثور على مستخدمين. أضف بعض المستخدمين للبدء!',
      error: 'خطأ',
      delete: 'حذف',
      fetchUsersFailed :'حدث خطأ أثناء تحميل المستخدمين',
      addUsersFailed : 'حدث خطأ حاول لاحقا'
    },
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error(translations[language].error + '' + translations[language].fetchUsersFailed);
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
      if (!response.ok) throw new Error(translations[language].addUsersFailed );
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
      if (!response.ok) throw new Error(translations[language].error + ': Failed to delete user');
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
        <h1>{translations[language].welcome}</h1>
        <p>{translations[language].description}</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="actions-bar">
            <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
              {showForm ? translations[language].cancel : translations[language].addUser}
            </button>
            <button className="btn btn-secondary" onClick={fetchUsers}>
              {translations[language].refresh}
            </button>
          </div>
          {showForm && (
            <div className="form-container">
              <form onSubmit={addUser} className="user-form">
                <div className="form-group">
                  <label htmlFor="name">{translations[language].nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={translations[language].namePlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{translations[language].emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={translations[language].emailPlaceholder}
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-success">
                    {translations[language].addUserButton}
                  </button>
                </div>
              </form>
            </div>
          )}
          {error && (
            <div className="alert alert-error">
              <strong>{translations[language].error}:</strong> {error}
              <button className="alert-close" onClick={() => setError(null)}>×</button>
            </div>
          )}
          <div className="users-section">
            <h2>{translations[language].usersManagement}</h2>
            {loading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <p>{translations[language].loading}</p>
              </div>
            ) : users.length === 0 ? (
              <div className="empty-state">
                <p>{translations[language].noUsers}</p>
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
                        {translations[language].delete}
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