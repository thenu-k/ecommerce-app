import React, {FC} from 'react'
import './ProductGrid.css'

const ProductGrid:FC = (props:any) => {
    console.log(props.itemList)
  return (
    <div className="product_items">
        {
        props.itemList.map((item:any)=>{
            return(
                <div className="product_wrap">
                    <div className="product_image center"><img src={item.primary_img} alt="" /></div>
                    <div className='center product_text'>
                        <div className="title">{item.title}</div>
                        <div className="price">{item.price}</div>
                    </div>
                </div>
            )
            })
        } 
    </div>
  )
}

export default ProductGrid