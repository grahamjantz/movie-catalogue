import React from 'react'
import { useState } from 'react'
import Movie from '../Movie/Movie'
import { baseUrl, apiKey } from '../tmdb'
import './NowPlaying.css'

const NowPlaying = () => {

  const url = `${baseUrl}movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

  const [nowPlaying, setNowPlaying] = useState([]);
  
  const fetchNowPlaying = async () => {
    const data = await fetch(url);
    const res = await data.json();
    setNowPlaying(res.results);
  }

  fetchNowPlaying();
  
  return (
    <div className='now-playing'>
        <h2>Now Playing</h2>
        <div className='now-playing-list'>
          {nowPlaying.map((movie) => {
            return (
              <Movie 
                key={movie.id} 
                movie={movie} 
                className='movie' 
                displayOverview={false} 
                displayProvider={false}
              />
            )
          })}
        </div>
    </div>
  )
}

export default NowPlaying