import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      {filters.map((filter) => (
        <div key={filter.name} className="flex flex-col">
          <label className="text-xs font-medium text-gray-500 mb-1">
            {filter.label}
          </label>
          {filter.type === 'select' ? (
            <select
              className="input-field"
              value={filter.value}
              onChange={(e) => onFilterChange(filter.name, e.target.value)}
            >
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              placeholder={filter.placeholder}
              className="input-field"
              value={filter.value}
              onChange={(e) => onFilterChange(filter.name, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterBar;