import ListGroup from './components/ListGroup';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setBackgroundColor(getRandomColor());
  };

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>
      <div className="content-container">
        {selectedItem && (
          <>
            <h1>{selectedItem}</h1>
            <p>Information about {selectedItem} goes here.</p>
          </>
        )}
      </div>
      <ListGroup onItemSelect={handleItemSelect} />
    </div>
  );
}

export default App;
