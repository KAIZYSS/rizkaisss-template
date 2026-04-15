import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import List from './components/List';
import './index.css';

function App() {
  const [items, setItems] = useState([]);
  
  // States for API fetching
  const [externalData, setExternalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Data fetching using useEffect and axios
  useEffect(() => {
    const fetchExternalData = async () => {
      try {
        setLoading(true);
        // Fetching top 5 items from generic jsonplaceholder
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        setExternalData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data from API');
        setLoading(false);
      }
    };

    fetchExternalData();
  }, []); // Empty dependency array means it runs once on mount

  // 2. Add an item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // 3. Delete an item
  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React App Simulator</h1>
        <p>Simple, Modular, and Feature-Rich</p>
      </header>

      <main className="main-content">
        <section className="section-form">
          <Form onAdd={handleAddItem} />
        </section>

        <section className="section-list">
          <List items={items} onDelete={handleDeleteItem} />
        </section>
      </main>

      {/* External API Data Section */}
      <aside className="api-section">
        <h2 className="title">Fetched Remote Data</h2>
        {loading && <div className="loading-spinner"></div>}
        {error && <p className="error">{error}</p>}
        
        {!loading && !error && (
          <ul className="api-list">
            {externalData.map((post) => (
              <li key={post.id} className="api-item">
                <span className="api-icon">🌐</span>
                <strong>{post.title}</strong>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

export default App;
