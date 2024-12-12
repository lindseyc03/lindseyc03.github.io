import "./App.css";
import { Home } from "./components/Home";
import { DeityPage } from "./components/DeityPage";
import React, { useState } from "react";

import deityData from "./data/deityData";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setBackgroundColor(getRandomColor());
  };


  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div>
      {selectedItem ? (
        <DeityPage
          deityName={selectedItem}
          title={deityData[selectedItem].title}
          text={deityData[selectedItem].text}
          images={deityData[selectedItem].images}
          backgroundColor={deityData[selectedItem].color}
          paragraphStyle={deityData[selectedItem].paragraphStyle}
          spotifyTrackId={deityData[selectedItem].spotifyTrackId}
          onItemSelect={handleItemSelect}
        />
      ) : (
        <Home onItemSelect={handleItemSelect} />
      )}
    </div>
  );
}

export default App;
