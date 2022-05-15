import React, {useEffect, useState} from 'react'
import LoadingIcon from '../../../Models/LoadingIcon/LoadingIcon'
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
    <section className="searchresults outer container" style={{marginTop: '50px'}}>
      {
        results.loading ?
          <LoadingIcon/>
        :
          results.map(item=>{return(<div>{item.title}</div>)})
      }
    </section>

  )
}

export default SearchResults