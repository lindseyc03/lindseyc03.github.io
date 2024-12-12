import "./App.css";
import { HomePage } from "./components/HomePage";
import { Home } from "./components/Home";
import { DeityPage } from "./components/DeityPage";
import React, { useState } from "react";
import deityData from "./data/deityData";
import { NavMenu } from "./components/NavigationMenu";
import { MusicPage } from "./components/MusicPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedItem(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {currentPage === "home" && <HomePage onNavigate={handleNavigation} />}
      {currentPage === "santeria" && !selectedItem && (
        <Home onNavigate={handleNavigation} onItemSelect={handleItemSelect} />
      )}
      {currentPage === "santeria" && selectedItem && (
        <DeityPage
          deityName={selectedItem}
          title={deityData[selectedItem].title}
          text={deityData[selectedItem].text}
          images={deityData[selectedItem].images}
          backgroundColor={deityData[selectedItem].color}
          paragraphStyle={deityData[selectedItem].paragraphStyle}
          spotifyTrackId={deityData[selectedItem].spotifyTrackId}
          onItemSelect={handleItemSelect}
          onNavigate={handleNavigation}
        />
      )}
      {currentPage === "music" && <MusicPage onNavigate={handleNavigation} />}
    </div>
  );
}

export default App;
