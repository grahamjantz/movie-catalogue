import React, { useState } from 'react'
import Movie from '../Movie/Movie'
import { baseUrl, apiKey} from '../tmdb'
import './Popular.css'

const Popular = () => {

    const [popular, setPopular] = useState([]);

    const url = `${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      setPopular(movies.results);
    };

    fetchPopular();
    
    const popularMap = popular.map((movie) => {
      return <Movie 
              className='movie'
              key={movie.id} 
              movie={movie} 
              displayOverview={false} 
              displayProvider={false}
            />
    })

  return (
    <div className='popular'>
      <h2>Popular</h2>
      <div className='popular-list'>
        {popularMap}
      </div>
    </div>
  )
}

export default Popular