import './App.css';
import MovieList from './MovieList/MovieList';
import SearchBar from './SearchBar/SearchBar'

function App() {

    
    return (
      <div className="App">
        <SearchBar />
        <div className='movielist'>
          <MovieList />
        </div>
      </div>
  );
}


export default App;
