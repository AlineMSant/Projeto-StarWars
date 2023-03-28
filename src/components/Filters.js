import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const { changeSearch, setChangeSearch } = useContext(AppContext);

  function handleChangeSearch(e) {
    setChangeSearch(e.target.value);
  }

  return (
    <input
      data-testid="name-filter"
      type="text"
      name="search"
      value={ changeSearch }
      onChange={ handleChangeSearch }

    />
  );
}

export default Filters;
