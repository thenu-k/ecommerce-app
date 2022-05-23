import React, { useEffect, useState } from 'react'
import './Featured.css'
import shoesHorizontal from '../../../Assets/shoesHorizontal.jpg'
import shoesMen from '../../../Assets/shoesMen.jpg'
import shoesWomen from '../../../Assets/shoesWomen.jpg'
import { Link } from 'react-router-dom'
import ProductGrid from '../../../Models/ProductGrid/ProductGrid'

const Featured = () => {

  //States
  const [featuredItems, setFeaturedItems] = useState(null)
  const [loading, setLoading] = useState(true)
  
  //Getting featured data
  useEffect(()=>{
    fetch('http://localhost/featured')
    .then(res => {return res.json()})
    .then(data=>{ setFeaturedItems(data);setLoading(false)})
  }, [])

  return (
    <section className="featured container outer center" aria-label='Featured Section'>
      <div className={`featured container inner`} aria-label='Inner Container'>
        <h3>Featured</h3>
        {/*@ts-ignore*/}
        <ProductGrid itemList={featuredItems} loading={loading}/>
        {/* <button onClick={()=>{document.querySelector('.featured.container.inner')?.classList.toggle('showMore')}}>More</button> */}
      </div>
    </section>
  )
}

export default Featured