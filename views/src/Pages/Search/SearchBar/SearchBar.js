import React from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  return (
    <>
    <section className='searchbar outer container' aria-label='Search Bar Container'>
        <h3 className='search_query'>{props.search_query}</h3>
        <form action="" >
            <input type="text" name="" className="searchbar input"></input>
            <select className="filter sort_by" aria-label='Drop Down Box: Sort By'>
                <option value="Popularity">Popularity</option>
                <option value="Price: Ascending" >Price: Ascending</option>
                <option value="Price: Descending">Price: Descending</option>
            </select>
            <select name="" className="filter brand" >
                <option value="Jike">Jike</option>
                <option value="Jadidas">Jadidas</option>
                <option value="Jouie Juitton">Jouie Juitton</option>
            </select>
        </form>
    </section>
    </>
  )
}

export default SearchBar