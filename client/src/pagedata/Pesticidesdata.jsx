import { GET_CROP } from '@/utils/constants';
import React from 'react';
import { useState } from 'react';
import { apiClient } from "@/lib/api-client.js";
const PestData = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const crops = [
    'Corn', 'Soybeans', 'Wheat', 'Cotton', 'Tomatoes', 
    'Lettuce', 'Grapes', 'Peppers', 'Apples', 'Strawberries', 
    'Cucumbers', 'Rice', 'Citrus Trees (Oranges, Lemons)', 'Sugarcane'
  ];
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const fetchAndShow = async () => {
    

      const response = await apiClient.get(GET_CROP+"/corn");
      console.log({ response });
      if (response.status === 201) {
        
        console.log(response);
      }
    }
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

    <button className='bg-sky-800 rounded-full h-12 text-lg w-32' onClick={fetchAndShow} >Find</button>
  </div>
  );
};

export default PestData;