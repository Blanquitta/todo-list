export default function FilterInput({ filterTerm, onFilterChange }) {
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
  );
}
