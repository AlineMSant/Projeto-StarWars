import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const { changeSearch, setChangeSearch, setValueColumn, setValueOperator,
    valueNumber, setValueNumber, setButtonClick, buttonClick,
    arrayFiltersNumbers, setArrayFiltersNumbers,
    valueColumn, valueOperator, setStatusFiltered,
    optionsColumn, arrayOptionsFiltered,
    setArrayOptionsFiltered } = useContext(AppContext);

  function handleClick() {
    setButtonClick(!buttonClick);
    setStatusFiltered(true);

    setArrayFiltersNumbers((prevList) => [...prevList, {
      column: valueColumn,
      operator: valueOperator,
      number: valueNumber,
    }]);

    setArrayOptionsFiltered((prevList) => [...prevList, valueColumn]);

    setButtonClick(false);
  }

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
        { arrayOptionsFiltered.length > 0 ? optionsColumn
          .map((opt) => (!arrayOptionsFiltered.includes(opt) && (
            <option key={ opt } value={ opt }>
              {opt}
            </option>)))
          : optionsColumn.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              {option}
            </option>))}
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
        onClick={ handleClick }
      >
        FILTRAR
      </button>

      {arrayFiltersNumbers.length > 0 && arrayFiltersNumbers
        .map((filter) => (
          <li key={ filter.number }>
            {`${filter.column} ${filter.operator} ${filter.number}`}
          </li>))}
    </div>
  );
}

export default Filters;
