import React, {ChangeEvent, useState} from 'react'
import './SearchBar.css'

//React router
import {useNavigate} from 'react-router-dom'

const SearchBar = (props:any) => {
  const [filters, setFilters] = useState({sort_by: null, brand: null})

  //Link changes
  const navigate = useNavigate()

  //Search Item function
  const searchItem = (e: React.FormEvent):void => {
    e.preventDefault();
    navigate('/search/new', {replace: false})
  }

  return (
    <>
    <section className='searchbar outer container' aria-label='Search Bar Container'>
        {/* <h3 className='search_query'>{props.search_query}</h3> */}
        <form  onSubmit={(e)=>searchItem(e)}>
            <input type="text" name="Search" className="searchbar input" placeholder='Search Items'></input>
        </form>
    </section>
    </>
  )
}

export default SearchBar