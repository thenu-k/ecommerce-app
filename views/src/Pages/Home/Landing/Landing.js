import React from 'react'
import './Landing.css'
const landing_image = require('./../../../Assets/landing.jpg')

const Landing = () => {

  return (
    <>
    <section aria-label='Landing Section' className="landing container outer">
        <div className="landing container inner">
            <div className="landing image outer center" aria-label='Landing Image'>
                <img src={landing_image} alt="Lady in casual wear" loading='lazy'/>
                <div className="landing text outer center" aria-label='Landing Text'>
                   <h2>Summer Sale</h2>
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Landing