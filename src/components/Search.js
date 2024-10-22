function Search({ onSearchChange }) {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);  // Update search term in parent component
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleInputChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

