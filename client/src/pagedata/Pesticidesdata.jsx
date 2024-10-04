import React from 'react';
import { useState } from 'react';

const PestData = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const crops = [
    'Corn', 'Soybeans', 'Wheat', 'Cotton', 'Tomatoes', 
    'Lettuce', 'Grapes', 'Peppers', 'Apples', 'Strawberries', 
    'Cucumbers', 'Rice', 'Citrus Trees', 'Sugarcane'
  ];
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="dropdown-container">
    <label htmlFor="cropDropdown">Select a Crop: </label>
    <select id="cropDropdown" value={selectedValue} onChange={handleChange} className="dropdown">
      <option value="" disabled>Select a crop</option>
      {crops.map((crop, index) => (
        <option key={index} value={crop}>
          {crop}
        </option>
      ))}
    </select>

    {selectedValue && (
      <div className="selected-value">
        <p>You selected: {selectedValue}</p>
      </div>
    )}
  </div>
  );
};

export default PestData;