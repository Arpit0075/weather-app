import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";
import LocationSelector from "./LocationSelector";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState("New York");

  const locations = ["New York", "London", "Tokyo", "Paris", "Sydney"];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="App">
      <LocationSelector locations={locations} onSelect={handleLocationSelect} />
      <Weather location={selectedLocation} />
    </div>
  );
};

export default App;
