import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [fetchPlanets, setFetchPlanets] = useState([]);
  const [filteredByName, setfilteredByName] = useState([]);
  const [changeSearch, setChangeSearch] = useState('');
  const [valueOperator, setValueOperator] = useState('');

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

  // para filtragem por digitação do input
  useEffect(() => {
    const newArray = fetchPlanets.filter((obj) => obj.name.toLowerCase()
      .includes(changeSearch.toLowerCase()));

    setfilteredByName(newArray);
  }, [changeSearch, fetchPlanets]);

  const values = {
    fetchPlanets,
    setFetchPlanets,
    changeSearch,
    setChangeSearch,
    filteredByName,
    setValueOperator,
    valueOperator,
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
