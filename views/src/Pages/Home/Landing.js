import React from 'react'
import './Landing.css'
const landing_image = require('./../../Assets/nick-karvounis-AHl1o5ITITI-unsplash (1).jpg')

const Landing = () => {

  return (
    <>
    <section aria-label='Landing Section' className="landing container outer">
        <div className="landing container inner">
            <div class="landing image outer center" aria-label='Landing Image'>
                <img src={landing_image} alt="" loading='lazy'/>
                <div class="landing text outer center" aria-label='Landing Text'>
                   <h2>Summer Sale</h2>
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Landing