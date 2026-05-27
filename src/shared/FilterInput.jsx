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
}) {
    <div>
  <label htmlFor="filter-term">Filter todos</label>

  <input
    id="filter-term"
    type="text"
    value={filterTerm}
    onChange={(event) => onFilterChange(event.target.value)}
  />
</div>


















































