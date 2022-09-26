import React from 'react'
import { useState } from 'react';
import { apiKey, baseUrl } from '../tmdb';
import './SearchBar.css'
import { FaTimes } from "react-icons/fa";
import Movie from '../Movie/Movie'

const SearchBar = () => {

  const [inputValue, setInputValue] = useState('');
  const [resArray, setResArray] = useState([])

  const fetchSearch = async () => {
      const data = await fetch(`${baseUrl}search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}`);
      const res = await data.json();
      //res.results is an array containing search results from tmdb based on the query provided 
      setResArray(res.results);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch();
  }

  return (
    <div className='search-container'>
        <form className='search-bar'> 
            <input type='text' onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={(e) => {
              handleSubmit(e)
            }} >Search</button>
        </form>
        <div className='search-results' style={{display: (resArray.length > 0 ? 'block' : 'none')}}>
            <button 
              className='close-search-results'
              onClick={() => {
                setResArray([]) 
                setInputValue('')
            }}>
              <FaTimes/>
            </button>
          {resArray.map((item) => {
            return (
              <Movie 
                className='search-results-movie'
                key={item.id} 
                movie={item} 
                displayOverview={false} 
                displayProvider={false}
              />
            )
            }
          )}
        </div>
    </div>
  )
}

export default SearchBar