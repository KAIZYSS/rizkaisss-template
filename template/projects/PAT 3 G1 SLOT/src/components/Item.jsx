import React from 'react';
import { FaTrash } from 'react-icons/fa';

// Using destructuring in parameters to extract item and onDelete
const Item = ({ item, onDelete }) => {
  // Further destructuring inside component
  const { id, name, value, category } = item;
  
  return (
    <div className="item-card">
      <div className="item-details">
        <h3 className="item-title">{name}</h3>
        <p className="item-info"><strong>Value:</strong> {value}</p>
        <span className={`badge badge-${category.toLowerCase()}`}>
          {category}
        </span>
      </div>
      <button 
        className="btn-delete" 
        onClick={() => onDelete(id)}
        aria-label="Delete item"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default Item;
