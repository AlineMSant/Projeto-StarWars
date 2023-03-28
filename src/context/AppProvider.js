import PropTypes from 'prop-types';
import { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [initial, setInitial] = useState('');

  const values = {
    initial,
    setInitial,
  };

  return (
    <AppContext.Provider value={ { values } }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
