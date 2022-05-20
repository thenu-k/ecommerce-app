import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import './Search.css'
import SearchResults from './SearchResults/SearchResults'

//Types 
export interface Item {
  title: string, id: number, img_url: string
} 
type Results = Item[] | undefined

const Search = () => {
  const params:any = useParams()

  //States
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<Results>(undefined)  
  
  //Seach
  useEffect(()=>{
    setLoading(true)                                              //Whenever the params change this function occurs so we can set loading = true
    let searchURL: string = getURL(params.search_query!)
    getData('http://localhost/'+ searchURL)
  },[params.search_query])                                        //Can't leave this empty because Link:parameter doesn't re-render components

  //Parsing the url
  const getURL = (search_query:string):string => {
    const strippedQuery: string = search_query.replace(/\+/g, ' ');
    return strippedQuery
  }
  //Get data function
  const getData = (getURL:string):void => {
    fetch(getURL).then((res)=>{return res.json()}).then((data)=> {
      setResults(data)
      setLoading(false) 
    })
  }


  return (
    <>
      <SearchBar search_query={params.search_query}/>
      <SearchResults results={results} loading={loading}/>
    </>
  )
}

export default Search