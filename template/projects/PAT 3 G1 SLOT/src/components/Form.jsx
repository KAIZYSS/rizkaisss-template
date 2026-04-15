import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    value: '',
    category: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    // Destructuring name and value from the event target
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation: Check for empty fields
    if (!formData.name || !formData.value || !formData.category) {
      setError('All fields are required!');
      return;
    }

    setError('');
    
    // Create new item object with a unique id
    const newItem = {
      id: uuidv4(),
      name: formData.name,
      value: formData.value,
      category: formData.category
    };

    onAdd(newItem);

    // Reset form
    setFormData({
      name: '',
      value: '',
      category: ''
    });
  };

  return (
    <div className="card">
      <h2 className="title">Add New Item</h2>
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Item name"
          />
        </div>
        
        <div className="form-group">
          <label>Value:</label>
          <input 
            type="text" 
            name="value" 
            value={formData.value} 
            onChange={handleChange} 
            placeholder="e.g. 100"
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">Add Item</button>
      </form>
    </div>
  );
};

export default Form;
