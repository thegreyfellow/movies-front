export const SearchButton: React.FC = () => {
  const handleSearchButton = () => {
    // FIXME: Implement search button
  };

  return (
    <button
      style={{
        marginLeft: '10px',
        padding: '10px',
        backgroundColor: 'blue',
        color: 'white',
      }}
      onClick={handleSearchButton}
    >
      Search
    </button>
  );
};

export default SearchButton;