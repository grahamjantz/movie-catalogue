import './App.css';
import NowPlaying from './NowPlaying/NowPlaying';
import Popular from './Popular/Popular';
import SearchBar from './SearchBar/SearchBar'

function App() {
    
    return (
      <div className="App">
        <SearchBar />
        <Popular />
        <NowPlaying />
      </div>
  );
}


export default App;
