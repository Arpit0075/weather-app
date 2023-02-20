import React from "react";

const LocationSelector = ({ locations, onSelect }) => {
  return (
    <div
      style={{
        display: "block",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "0.1rem" }}>Select a location:</h1>
      <select onChange={(event) => onSelect(event.target.value)}>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;
