import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import './ProductGrid.css'

const ProductGrid:FC = (props:any) => {
    if(props.loading===false){
        return (
            <div className="product_items">
                {
                props.itemList.map((item:any)=>{
                    return(
                        <Link to={`/item/${item.id}`} className="product_wrap" key={item.id}>
                            <div className="product_image center"><img src={item.primary_img} alt="" /></div>
                            <div className='center product_text'>
                                <div className="title">{item.title}</div>
                                <div className="price">{item.price}</div>
                            </div>
                        </Link>
                    )
                    })
                } 
            </div>
        )
        }else{
            return(
                <div className="product_items loading">
                    <div className="product_wrap">
                        <div className="product_image center"><img src='' alt="" /></div>
                        <div className='center product_text'>
                            <div className="title"></div>
                            <div className="price"></div>
                        </div>
                    </div>
                    <div className="product_wrap">
                        <div className="product_image center"><img src='' alt="" /></div>
                        <div className='center product_text'>
                            <div className="title"></div>
                            <div className="price"></div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default ProductGrid