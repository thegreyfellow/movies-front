// generate searchInput which will be used in the searchBar component

// Path: src/components/searchBar/searchInput.tsx

import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <input
      style={{ width: '100%' }}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search for a movie"
    />
  );
};

export default SearchInput;
