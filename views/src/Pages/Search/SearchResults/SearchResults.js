import React, {useEffect, useState} from 'react'
import LoadingIcon from '../../../Models/LoadingIcon/LoadingIcon'
import Product from '../../../Models/Product/Product'
import './SearchResults.css'

const SearchResults = () => {

  //States
  const [results, setResults] = useState({loading: true})
  const url = 'http://localhost:80/test'

  // Making the api call
  useEffect(()=>{getData(url)}, []) 
  const getData = (url) =>{
    fetch(url).then((res)=>{return res.json()}).then((data)=> {setResults(data) })
  }

  return (
    <section className="searchresults outer container center" id={results.loading ? 'SearchResultsLoading' : 'SearchResultsDone'}>
      {
        results.loading ?
          <LoadingIcon/>
        :
          results.map(item=>{return(<Product item={item}/>)})
      }
    </section>

  )
}

export default SearchResults