import React from 'react'
import { Link } from 'react-router-dom'
import './Featured.css'
const Image_featured1 = require('../../Assets/featured1.jpg')
const Image_featured2 = require('../../Assets/featured2.jpg')
const Image_featured3 = require('../../Assets/featured3.jpg')

const Featured = () => {
  return (
    <section className="featured container outer center" aria-label='Featured Collections Section'>
        <div className="featured_wrap outer featured" aria-label='Feautured Collections Container'>
              <div><img src={Image_featured2} alt="Man in red suit"/></div>
              <div><img src={Image_featured3} alt="Lady in casual wear"/></div>
              <div><img src={Image_featured1} alt="Lady in blue dress"/></div>
        </div>
    </section>
  )
}

export default Featured