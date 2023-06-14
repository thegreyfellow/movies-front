export const SearchButton: React.FC = () => {
  const handleSearchButton = () => {
    // TODO: Implement search button
    console.log('handling the search button');
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
