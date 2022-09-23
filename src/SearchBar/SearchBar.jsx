import React from 'react'
import { useEffect, useState } from 'react';
import { apiKey, baseUrl } from '../tmdb';
import './SearchBar.css'

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');


  console.log(searchTerm)

  useEffect(() => {
    fetchSearch();
  }, [])

  const fetchSearch = async () => {
    if (searchTerm !== '') {
      const data = await fetch(`${baseUrl}search/movie?api_key=${apiKey}&language=en-US&query=${query}`);
      const res = await data.json();
      console.log(res)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm)
  }

  return (
    <div>
        <form className='search-bar' onSubmit={() => handleSubmit}> 
            <input type='text' onChange={(e) => setSearchTerm(e.target.value)}/>
            <input type='submit' />
        </form>
    </div>
  )
}

export default SearchBar