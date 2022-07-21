import logo from './logo.svg';
import './App.css';
import SearchFilter from './component/SearchFilter';
import ApiSearchFilter from './component/ApiSearchFilter';

function App() {
  return (
    <div className="App">
      {/* <SearchFilter /> */}
      <ApiSearchFilter />
    </div>
  );
}

export default App;
