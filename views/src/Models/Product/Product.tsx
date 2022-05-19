import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = (props:any) => {
  return (
    <Link className="product outer wrap" to={'/product/'+props.item.id}>
        <div className="product image outer center" style={{overflow: 'hidden'}}>
          <img src={props.item.img_url} alt="" style={{height: 'auto', width: '100%'}}/>
        </div>
    </Link>
  )
}

export default Product