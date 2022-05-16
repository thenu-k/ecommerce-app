import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = (props) => {
  return (
    <Link class="product outer wrap" to={'/product/'+props.item.id}>
        <div class="product image outer">

        </div>
    </Link>
  )
}

export default Product