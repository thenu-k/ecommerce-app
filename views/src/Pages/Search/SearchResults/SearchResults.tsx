import React, {useEffect, useState} from 'react'
import LoadingIcon from '../../../Models/LoadingIcon/LoadingIcon'
import Product from '../../../Models/Product/Product'
import './SearchResults.css'

//Types 
interface Item {
  title: string, id: number, img_url: string
} 
type Results = Item[] | undefined


const SearchResults = () => {

  //States
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<Results>()    
  const url = 'http://localhost:80/test'

  // Making the api call
  useEffect(()=>{getData(url)}, []) 
  const getData = (url:any) =>{
    fetch(url).then((res)=>{return res.json()}).then((data)=> {setResults(data); setLoading(false) })
  }

  return (
    <section className="searchresults outer container center" id={loading ? 'SearchResultsLoading' : 'SearchResultsDone'}>
      {
        loading ?    
          <LoadingIcon/>
        :
          results?.map(item=>{return(<Product item={item} key={item.id}/>)})
      }
    </section>

  )
}

export default SearchResults