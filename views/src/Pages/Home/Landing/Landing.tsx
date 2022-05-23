import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
const landing_image = require('./../../../Assets/shoesLanding.jpg')

const Landing = () => {

  return (
    <>
    <section aria-label='Landing Section' className="landing container outer center">
        <img src={landing_image} alt="Lady in casual wear" loading='eager'/>
        <div className="landing text outer center" aria-label='Landing Text'>
            <h2>Walk Ahead</h2>
        </div>
    </section>
    </>
  )
}

export default Landing