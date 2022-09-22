import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';

const apiKey = 'e15a041018acc733a3ede615a5142acb';
const baseUrl = 'https://api.themoviedb.org/3/';


function App() {
    const [popular, setPopular] = useState([]);

    const url = `${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    useEffect(() => {
      fetchPopular();
    })

    const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
    };
    console.log(popular)
    
    return (
      <div className="App">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie}/>
        })}
      </div>
  );
}


export default App;
