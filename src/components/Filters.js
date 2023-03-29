import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const { changeSearch, setChangeSearch, setValueColumn, setValueOperator,
    valueNumber, setValueNumber, setButtonClick, buttonClick } = useContext(AppContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="search"
        value={ changeSearch }
        onChange={ (e) => setChangeSearch(e.target.value) }

      />

      <select
        data-testid="column-filter"
        onChange={ (e) => setValueColumn(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (e) => setValueOperator(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ valueNumber }
        onChange={ (e) => setValueNumber(e.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setButtonClick(!buttonClick) }
      >
        FILTRAR
      </button>

    </div>
  );
}

export default Filters;
