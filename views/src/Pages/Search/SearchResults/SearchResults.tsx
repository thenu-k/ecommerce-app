import React, {useEffect, useState} from 'react'
import LoadingIcon from '../../../Models/LoadingIcon/LoadingIcon'
import Product from '../../../Models/Product/Product'
import './SearchResults.css'


const SearchResults = () => {

  //States
  const [results, setResults] = useState([{loading: true, id: null}])    //Temp type fix
  const url = 'http://localhost:80/test'

  // Making the api call
  useEffect(()=>{getData(url)}, []) 
  const getData = (url:any) =>{
    fetch(url).then((res)=>{return res.json()}).then((data)=> {setResults(data) })
  }

  return (
    <section className="searchresults outer container center" id={results[0].loading ? 'SearchResultsLoading' : 'SearchResultsDone'}>
      {
        results[0].loading ?    
          <LoadingIcon/>
        :
          results.map(item=>{return(<Product item={item} key={item.id}/>)})
      }
    </section>

  )
}

export default SearchResults