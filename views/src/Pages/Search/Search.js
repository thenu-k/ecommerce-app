import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import './Search.css'
import SearchResults from './SearchResults/SearchResults'

const Search = () => {
  const params = useParams()
  return (
    <>
      <SearchBar search_query={params.search_query}/>
      <SearchResults/>
    </>
  )
}

export default Search