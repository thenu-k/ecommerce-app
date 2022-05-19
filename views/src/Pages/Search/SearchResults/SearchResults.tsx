import React, {useEffect, useState} from 'react'
import LoadingIcon from '../../../Models/LoadingIcon/LoadingIcon'
import Product from '../../../Models/Product/Product'
import './SearchResults.css'


//Types 
interface Item {
  title: string, id: number, img_url: string
} 
type Results = Item[] | undefined


const SearchResults = (props:any) => {

  //States
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<Results>()    
  let url: String;

  // Making the api call
  useEffect(()=>{url = getURL(props.search_query); getData(url)}, [props.search_query]) 

  //Get url function
  const getURL = (search_query: string):string => {
    const strippedQuery: string = search_query.replace(/\+/g, ' ');
    console.log(strippedQuery)
    return strippedQuery
  }

  //Get data function
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