import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../App.css';
import lupa from '../images/lupa.png';

function Filters() {
  const {
    fetchPlanets,
    changeSearch,
    valueNumber,
    arrayFiltersNumbers,
    valueColumn,
    valueOperator,
    optionsColumn,
    arrayOptionsFiltered,
    setChangeSearch,
    setValueNumber,
    setArrayFiltersNumbers,
    setValueColumn,
    setValueOperator,
    setArrayOptionsFiltered,
    setStatusFiltered,
    setfiltered,
  } = useContext(AppContext);

  function handleClick() {
    setStatusFiltered(true);

    setArrayFiltersNumbers((prevList) => [...prevList, {
      column: valueColumn,
      operator: valueOperator,
      number: valueNumber,
    }]);

    setArrayOptionsFiltered((prevList) => [...prevList, valueColumn]);
  }

  function handleClickDeleteOne(e) {
    setfiltered(fetchPlanets);
    setArrayFiltersNumbers(arrayFiltersNumbers
      .filter((obj) => obj.column !== e.target.value));

    const newOptions = arrayOptionsFiltered.filter((option) => option !== e.target.value);

    setArrayOptionsFiltered(newOptions);
  }

  function handleClickDeleteAll() {
    setArrayFiltersNumbers([]);
    setArrayOptionsFiltered([]);
    setValueColumn('population');
  }

  return (
    <div className="filters-container">
      <input
        className="input-name"
        data-testid="name-filter"
        type="text"
        name="search"
        value={ changeSearch }
        onChange={ (e) => setChangeSearch(e.target.value) }

      />
      <img className="img-lupa" src={ lupa } alt="lupa" />

      <div className="container-filters-numbers">
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
          className="input-number"
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

        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ handleClickDeleteAll }
        >
          REMOVER FILTROS
        </button>
      </div>

      {arrayFiltersNumbers.length > 0 && arrayFiltersNumbers
        .map((filter) => (
          <li data-testid="filter" key={ filter.column }>
            {`${filter.column} ${filter.operator} ${filter.number}`}
            <button
              type="button"
              value={ filter.column }
              onClick={ handleClickDeleteOne }
            >
              X

            </button>
          </li>))}
    </div>
  );
}

export default Filters;
