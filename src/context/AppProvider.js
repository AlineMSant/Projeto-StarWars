import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [fetchPlanets, setFetchPlanets] = useState([]);
  const [filteredByName, setfilteredByName] = useState([]);
  const [changeSearch, setChangeSearch] = useState('');
  const [keysToSelectColumn, setKeysToSelectColumn] = useState([]);

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

  useEffect(() => {
    const newArray = fetchPlanets.filter((obj) => obj.name.toLowerCase()
      .includes(changeSearch.toLowerCase()));

    setfilteredByName(newArray);
  }, [changeSearch, fetchPlanets]);

  useEffect(() => {
    if (fetchPlanets.length > 0) {
      const keys = Object.keys(fetchPlanets[0]);
      const keysToColumn = keys.filter((filter) => filter === 'population'
      || filter === 'orbital_period' || filter === 'diameter'
      || filter === 'rotation_period' || filter === 'surface_water');
      setKeysToSelectColumn(keysToColumn);
    }
  }, [fetchPlanets]);

  const values = {
    fetchPlanets,
    setFetchPlanets,
    changeSearch,
    setChangeSearch,
    filteredByName,
    keysToSelectColumn,
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
