import React, {useEffect, useState, FC} from 'react'
import LoadingIcon from '../../../Models/LoadingIcon/LoadingIcon'
import Product from '../../../Models/Product/Product'
import './SearchResults.css'

//Getting item type
import {Item} from '../Search'
import ProductGrid from '../../../Models/ProductGrid/ProductGrid'

//Prop types
interface Props {
  loading: boolean, results: Item[] | undefined
}

const SearchResults:FC<Props> = (props) => {
  //URL
  const server_url = 'http://localhost/test'

  return (
    <section className="searchresults outer container center" id={props.loading ? 'SearchResultsLoading' : 'SearchResultsDone'}>
      {
        props.loading ?    
          <LoadingIcon/>
        :
          // props.results?.map((item)=>{return(<Product item={item} key={item.id}/>)})
          <ProductGrid/>
      }
    </section>

  )
}

export default SearchResults