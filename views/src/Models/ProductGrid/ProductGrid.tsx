import React, {FC} from 'react'
import './ProductGrid.css'

const ProductGrid:FC = (props:any) => {
  return (
    <div className="product_items">
        {/* {
        props.itemList.forEach((item:any)=>{ */}
            <div className="product_wrap">
                <div className="product_image center"><img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg' alt="" /></div>
                <div className='center product_text'>
                    <div className="title">Athletic Shoes</div>
                    <div className="price">$100</div>
                </div>
            </div>
            <div className="product_wrap">
                <div className="product_image center"><img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg' alt="" /></div>
                <div className='center product_text'>
                    <div className="title">Athletic Shoes</div>
                    <div className="price">$100</div>
                </div>
            </div>
            <div className="product_wrap">
                <div className="product_image center"><img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg' alt="" /></div>
                <div className='center product_text'>
                    <div className="title">Athletic Shoes</div>
                    <div className="price">$100</div>
                </div>
            </div>
            <div className="product_wrap">
                <div className="product_image center"><img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg' alt="" /></div>
                <div className='center product_text'>
                    <div className="title">Athletic Shoes</div>
                    <div className="price">$100</div>
                </div>
            </div>
        {/* })
        } */}
    </div>
  )
}

export default ProductGrid