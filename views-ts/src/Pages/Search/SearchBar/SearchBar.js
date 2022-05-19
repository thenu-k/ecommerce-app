import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  const [filters, setFilters] = useState({sort_by: null, brand: null})

  return (
    <>
    <section className='searchbar outer container' aria-label='Search Bar Container'>
        <h3 className='search_query'>{props.search_query}</h3>
        <form  >
            <input type="text" name="Search" className="searchbar input"></input>
        </form>
    </section>
    </>
  )
}

export default SearchBar