import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [fetchPlanets, setFetchPlanets] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [changeSearch, setChangeSearch] = useState('');
  const [valueColumn, setValueColumn] = useState('population');
  const [valueOperator, setValueOperator] = useState('maior que');
  const [valueNumber, setValueNumber] = useState('0');
  const [buttonClick, setButtonClick] = useState(false);
  const [statusFiltered, setStatusFiltered] = useState(false);
  const [arrayFiltersNumbers, setArrayFiltersNumbers] = useState([]);

  // para o fetch inicial
  useEffect(() => {
    const requestApi = async () => {
      const request = await fetch('https://swapi.dev/api/planets');
      const { results } = await request.json();
      const arrayWithoutResidents = results.map((obj) => {
        // https://horadecodar.com.br/2020/12/11/remover-propriedade-de-objeto-javascript/#:~:text=Voc%C3%AA%20deve%20apenas%20utilizar%20delete%20com%20o%20nome%20da%20chave!%20%3D)
        delete obj.residents;
        return obj;
      });

      setFetchPlanets(arrayWithoutResidents);
      setfiltered(arrayWithoutResidents);
    };

    requestApi();
  }, []);

  // para filtragem por digitação do input e por coluna
  useEffect(() => {
    const newArrayFiltered = filtered.filter((obj) => {
      const changeTableByName = obj.name.toLowerCase()
        .includes(changeSearch.toLowerCase());
      console.log(changeTableByName);

      let changeTableByColumn = true;

      if (statusFiltered) {
        arrayFiltersNumbers.map(({ column, operator, number }) => {
          if (operator === 'maior que') {
            changeTableByColumn = parseFloat(obj[column]) > parseFloat(number);
          } else if (operator === 'menor que') {
            changeTableByColumn = parseFloat(obj[column]) < parseFloat(number);
          } else if (operator === 'igual a') {
            changeTableByColumn = obj[column] === number;
          }
          console.log(changeTableByColumn);
          return changeTableByColumn;
        });
      }

      return changeTableByName && changeTableByColumn;
    });

    if (arrayFiltersNumbers.length === 0) {
      setfiltered(fetchPlanets.filter((obj) => obj.name.toLowerCase()
        .includes(changeSearch.toLowerCase())));
    } else {
      setfiltered(newArrayFiltered);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeSearch, statusFiltered, arrayFiltersNumbers]);

  const values = {
    fetchPlanets,
    filtered,
    changeSearch,
    valueColumn,
    valueOperator,
    valueNumber,
    buttonClick,
    arrayFiltersNumbers,
    setChangeSearch,
    setValueOperator,
    setValueColumn,
    setValueNumber,
    setButtonClick,
    setArrayFiltersNumbers,
    setStatusFiltered,
  };

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
