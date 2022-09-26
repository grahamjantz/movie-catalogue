import React from 'react'
import { useEffect } from 'react'
import './Movie.css'
import { baseUrl, apiKey } from '../tmdb'
import { useState } from 'react'

const Movie = ({ movie, displayOverview, displayProvider, className }) => {

  const [providers, setProviders] = useState([])

  useEffect(() => {
    fetchProviders();
  });

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
      <div className={className}>
        {
          movie.poster_path 
          ? <img className='image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> 
          : <h6>{movie.title}</h6>
        }
        <h3 className='title'>{movie.title}</h3>
        {checkProvider()}
        <h4 className='provider' style={{display: (displayProvider === true ? 'block' : 'none')}}>{providerName}</h4>
        <p className='overview' style={{display: (displayOverview === true ? 'block' : 'none')}}>{movie.overview}</p>
      </div>
    );
}

export default Movie