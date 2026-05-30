import { useState, useEffect } from 'react';

const [filterTerm, setFilterTerm] = useState('');
const debouncedFilterTerm = useDebounce(filterTerm, 300);

export default function SortBy({
  sortBy,
  sortDirection,
  onSortByChange,
  onSortDirectionChange,
  filterTerm,
  onFilterChange,
  

}) 
const paramsObject = {
  sortBy,
  sortDirection,
};

    
if (debouncedFilterTerm) {
  paramsObject.find = debouncedFilterTerm;
}

const params = new URLSearchParams(paramsObject);

function FilterInput({ filterTerm, onFilterChange }) {
  return (
    <div>
  <label htmlFor="filter-term">Filter todos</label>

  <input
    id="filter-term"
    type="text"
    value={filterTerm}
    onChange={(event) => onFilterChange(event.target.value)}
     placeholder="Search by title..."
  />
</div>
  )
}



















































