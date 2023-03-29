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
    };

    requestApi();
  }, []);

  // para filtragem por digitação do input e por coluna
  useEffect(() => {
    const newArrayFiltered = fetchPlanets.filter((obj) => {
      const changeTableByName = obj.name.toLowerCase()
        .includes(changeSearch.toLowerCase());

      let changeTableByColumn = true;

      if (buttonClick) {
        if (valueOperator === 'maior que') {
          changeTableByColumn = parseFloat(obj[valueColumn]) > parseFloat(valueNumber);
        } else if (valueOperator === 'menor que') {
          changeTableByColumn = parseFloat(obj[valueColumn]) < parseFloat(valueNumber);
        } else if (valueOperator === 'igual a') {
          changeTableByColumn = obj[valueColumn] === valueNumber;
        }
      }

      return changeTableByName && changeTableByColumn;
    });

    setfiltered(newArrayFiltered);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeSearch, buttonClick]);

  const values = {
    fetchPlanets,
    changeSearch,
    valueNumber,
    buttonClick,
    filtered,
    setChangeSearch,
    setValueOperator,
    setValueColumn,
    setValueNumber,
    setButtonClick,
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
