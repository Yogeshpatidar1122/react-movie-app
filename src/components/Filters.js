// Filters.js
import React from 'react';

function Filters({ filters, onFilterChange }) {
  const handleFilterChange = (filterType, e) => {
    const value = e.target.value;
    onFilterChange(filterType, value);
  };

  return (
    <div className="filters p-4 bg-gray-200 rounded-md mb-4 flex flex-wrap justify-center">
      <div className="mx-2 mb-2">
        <label className="block mb-2 font-bold">Language</label>
        <select
          value={filters.language}
          onChange={e => handleFilterChange('language', e)}
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Kannada">Kannada</option>
          <option value="Tamil">Tamil</option>
          <option value="Benagli">Bengali</option>
          <option value="Chinese">Chinese</option>
          <option value="Spanish">Spanish</option>
          <option value="Korean">Korean</option>
          <option value="Telugu">Telugu</option>
        </select>
      </div>

      <div className="mx-2 mb-2">
        <label className="block mb-2 font-bold">Country</label>
        <select
          value={filters.country}
          onChange={e => handleFilterChange('country', e)}
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Ireland">Ireland</option>
          <option value="Norway">Norway</option>
          <option value="United States">United States</option>
        </select>
      </div>

      <div className="mx-2 mb-2">
        <label className="block mb-2 font-bold">Genre</label>
        <select
          value={filters.genre}
          onChange={e => handleFilterChange('genre', e)}
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
