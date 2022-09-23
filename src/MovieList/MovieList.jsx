import React, { useState, useEffect} from 'react'
import Movie from '../Movie/Movie'
import { baseUrl, apiKey} from '../tmdb'
import './MovieList.css'

const MovieList = () => {

    const [popular, setPopular] = useState([]);
    const [companies, setCompanies] = useState();

    const url = `${baseUrl}movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    useEffect(() => {
      fetchPopular();
      // fetchCompanies();
    }, [])

    const fetchPopular = async () => {
      const data = await fetch(url);
      const movies = await data.json();
      setPopular(movies.results);
    };

    // const fetchCompanies = async () => {
    //   const data = await fetch(`${baseUrl}search/company/504?api_key=${apiKey}&page=1`);
    //   const companiesData = await data.json();
    //   setCompanies(companiesData);
    // }
    
    const popularMap = popular.map((movie) => {
      return <Movie key={movie.id} movie={movie} />
    })

  return (
    popularMap
  )
}

export default MovieList