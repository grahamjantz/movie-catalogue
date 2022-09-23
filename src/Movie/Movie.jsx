import React from 'react'
import { useEffect } from 'react'
import './Movie.css'
import { baseUrl, apiKey } from '../tmdb'
import { useState } from 'react'

const Movie = ({ movie }) => {

  const [providers, setProviders] = useState([])

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    const data = await fetch(`${baseUrl}movie/${movie.id}/watch/providers?api_key=${apiKey}`);
    const providers = await data.json();
    // console.log(providers.results);
    setProviders(providers)
  }

  let providerName;

  const checkProvider = () => {
    if (providers.results) {
      if (!providers.results.CA) {
      } else if (providers.results.CA.flatrate) {
          providerName = providers.results.CA.flatrate[0].provider_name;
      }
    } 
  }

  return (
      <div className='movie'>
        <img className='image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.path} />
        <h3 className='title'>{movie.title}</h3>
        {checkProvider()}
        <h4 className='provider'>{providerName}</h4>
        <p className='overview'>{movie.overview}</p>
      </div>
    );
}

export default Movie