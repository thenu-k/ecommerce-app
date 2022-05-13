import React from 'react'
import './Landing.css'
const landing_image = require('./../../Assets/larm-rmah-R1Ku62Z7zqE-unsplash.jpg')

const Landing = () => {

  return (
    <>
    <section aria-label='Landing Section' className="landing container outer">
        <div className="landing container inner">
            <div class="landing image outer center" aria-label='Landing Image'>
                <img src={landing_image} alt="" loading='lazy'/>
            </div>
            <div class="landing text outer" aria-label='Landing Text'>

            </div>
        </div>
    </section>
    </>
  )
}

export default Landing