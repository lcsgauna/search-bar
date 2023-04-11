
import './App.css';
import SearchBar from './components/SearchBar';
import Data from './Data.json'

function App() {
  return (
   <div className='App'>
    <SearchBar data={Data}/>
   </div>
  );
}

export default App;
