import React, { useContext } from 'react';

import MoviesDispatchContext from '../../contexts/moviesDispatchContext';
import MoviesStateContext from '../../contexts/moviesStateContext';
import { SORTING_OPTIONS } from '../../utility/constants';

import './sortingSelect.css';

const SortingSelect: React.FC = () => {
  const { setState } = useContext(MoviesDispatchContext);
  const { state } = useContext(MoviesStateContext);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ type: 'set_sort_by', payload: { sortBy: event.target.value } });
  };

  return (
    <select
      role="sorting-select"
      className="sorting-container"
      value={state.sortBy || 'default'}
      onChange={handleSelectChange}
    >
      <option value="default" disabled>
        Sort by
      </option>
      {SORTING_OPTIONS.map(sortKey => {
        return (
          <option role={sortKey} key={sortKey} value={sortKey}>
            sort by {sortKey}
          </option>
        );
      })}
    </select>
  );
};

export default SortingSelect;
