import Table from './components/Table';
import './App.css';
import AppProvider from './context/AppProvider';
import Filters from './components/Filters';
import starwars from './images/starwars.jpg';

function App() {
  return (
    <div className="app-container">
      <div className="title-container">
        <img className="starwars" src={ starwars } alt="starwars" />
      </div>
      <div className="App">
        <AppProvider>
          <Filters />
          <Table />
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
