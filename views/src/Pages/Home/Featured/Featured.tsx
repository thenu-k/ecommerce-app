import React from 'react'
import './Featured.css'
import shoesHorizontal from '../../../Assets/shoesHorizontal.jpg'
import shoesMen from '../../../Assets/shoesMen.jpg'
import shoesWomen from '../../../Assets/shoesWomen.jpg'
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
    <section className="featured container outer center" aria-label='Featured Section'>
      <div className="featured container inner" aria-label='Inner Container'>
        <h3>Featured</h3>
        <div className="featured_items">
          <div className="featured_wrap">
            <div className="featured_image center"><img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg' alt="" /></div>
            <div className='center featured_text'>
              <div className="title">Athletic Shoes</div>
              <div className="price">$100</div>
            </div>
          </div>
          <div className="featured_wrap">
            <div className="featured_image center"><img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg' alt="" /></div>
            <div className='center featured_text'>
              <div className="title">Athletic Shoes</div>
              <div className="price">$100</div>
            </div>
          </div>
          <div className="featured_wrap">
            <div className="featured_image center"><img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg' alt="" /></div>
            <div className='center featured_text'>
              <div className="title">Athletic Shoes</div>
              <div className="price">$100</div>
            </div>
          </div>
          <div className="featured_wrap">
            <div className="featured_image center"><img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg' alt="" /></div>
            <div className='center featured_text'>
              <div className="title">Athletic Shoes</div>
              <div className="price">$100</div>
            </div>
          </div>
          <div className="featured_wrap">
            <div className="featured_image center"><img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8be0676348c04300a579ae14013777d5_9366/Cloudfoam_Pure_2.0_shoes_White_GY4485_01_standard.jpg' alt="" /></div>
            <div className='center featured_text'>
              <div className="title">Athletic Shoes</div>
              <div className="price">$100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured