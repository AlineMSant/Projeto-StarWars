import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const {
    changeSearch,
    setChangeSearch,
    setValueOperator,
    setValueColumn,
    setValueNumber,
    valueNumber,
  } = useContext(AppContext);

  function handleChangeSearch(e) {
    setChangeSearch(e.target.value);
  }

  function handleChangeOperator(e) {
    setValueOperator(e.target.value);
  }

  function handleChangeColumn(e) {
    setValueColumn(e.target.value);
  }

  function handleChangeNumber(e) {
    setValueNumber(e.target.value);
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

      <select
        data-testid="column-filter"
        onChange={ handleChangeColumn }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleChangeOperator }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ valueNumber }
        onChange={ handleChangeNumber }
      />

      <button
        type="button"
        data-testid="button-filter"
      >
        FILTRAR
      </button>

    </div>
  );
}

export default Filters;
