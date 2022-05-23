import React from 'react'
import './Featured.css'
import shoesHorizontal from '../../../Assets/shoesHorizontal.jpg'
import shoesMen from '../../../Assets/shoesMen.jpg'
import shoesWomen from '../../../Assets/shoesWomen.jpg'
import { Link } from 'react-router-dom'
import ProductGrid from '../../../Models/ProductGrid/ProductGrid'

const Featured = () => {
  return (
    <section className="featured container outer center" aria-label='Featured Section'>
      <div className="featured container inner" aria-label='Inner Container'>
        <h3>Featured</h3>
        {/*@ts-ignore*/}
        <ProductGrid itemList={[1,2,4,5]}/>
      </div>
    </section>
  )
}

export default Featured