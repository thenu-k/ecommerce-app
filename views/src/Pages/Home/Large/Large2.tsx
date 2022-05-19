import React, {FC} from 'react'
import './Large.css'
const Image_large2 = require('../../../Assets/large2.jpg')

const Large2:FC = () => {
  return (
    <>
    <section className="container large large2 outer center" aria-label='Promotion'>
        <div className="large large2 container inner">
            <img src={Image_large2} alt=""/>
        </div>
    </section>
    </>
  )
}

export default Large2