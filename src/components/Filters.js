import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const {
    changeSearch,
    setChangeSearch,
    keysToSelectColumn,
    setValueOperator,
  } = useContext(AppContext);

  function handleChangeSearch(e) {
    setChangeSearch(e.target.value);
  }

  function handleChangeOperator(e) {
    setValueOperator(e.target.value);
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

      <select
        data-testid="comparison-filter"
        onChange={ handleChangeOperator }
      >
        <option value="maior que">maior que </option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

    </div>
  );
}

export default Filters;
