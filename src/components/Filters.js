import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const { changeSearch, setChangeSearch, keysToSelectColumn } = useContext(AppContext);

  function handleChangeSearch(e) {
    setChangeSearch(e.target.value);
  }

  return (
    <div>

      <input
        data-testid="name-filter"
        type="text"
        name="search"
        value={ changeSearch }
        onChange={ handleChangeSearch }

      />

      <select data-testid="column-filter">
        { keysToSelectColumn.map((key) => <option key={ key }>{key}</option>) }
      </select>

    </div>
  );
}

export default Filters;
