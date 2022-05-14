import React from 'react'
import { Link } from 'react-router-dom'
import './Featured.css'
const Image_featured1 = require('../../Assets/featured1.jpg')
const Image_featured2 = require('../../Assets/featured2.jpg')
const Image_featured3 = require('../../Assets/featured3.jpg')

const Featured = () => {
  return (
    <section class="featured container outer" aria-label='Featured Collections Section'>
        <div class="featured_wrap outer featured" aria-label='Feautured Collections Container'>
            <ul>
                <li><Link to=""><img src={Image_featured2} alt=""/></Link></li>
                <li><Link to=""><img src={Image_featured3} alt=""/></Link></li>
                <li><Link to=""><img src={Image_featured1} alt=""/></Link></li>
            </ul>
        </div>
    </section>
  )
}

export default Featured