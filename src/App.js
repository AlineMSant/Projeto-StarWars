import Table from './components/Table';
import './App.css';
import AppProvider from './context/AppProvider';
import Filters from './components/Filters';

function App() {
  return (
    <AppProvider>
      <Filters />
      <Table />
    </AppProvider>
  );
}

export default App;
