import React from 'react'
import './Large.css'
const Image_large1 = require('../../Assets/large1.jpg')

const Large1 = () => {
  return (
    <>
    <section className="container large large1 outer center" aria-label='Promotion'>
        <div className="large container inner large1">
            <img src={Image_large1} alt=""/>
        </div>
    </section>
    </>
  )
}

export default Large1