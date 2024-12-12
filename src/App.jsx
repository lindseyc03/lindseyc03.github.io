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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
