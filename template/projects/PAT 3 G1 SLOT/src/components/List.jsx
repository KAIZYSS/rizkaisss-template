import React from 'react';
import Item from './Item';

const List = ({ items, onDelete }) => {
  if (items.length === 0) {
    return <div className="card empty-message"><p>No items available. Please add some.</p></div>;
  }

  return (
    <div className="list-container">
      <h2 className="title">Items List</h2>
      <div className="grid">
        {/* Map rendering the list */}
        {items.map((item) => (
          <Item 
            key={item.id} 
            item={item} 
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};

export default List;
