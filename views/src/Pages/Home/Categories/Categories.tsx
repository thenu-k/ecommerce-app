import React from 'react'
import './Categories.css'
import shoesComfort from '../../../Assets/shoesComfort.jpg'
import shoesSports from '../../../Assets/shoesSports.jpg'
import shoesBlue from '../../../Assets/shoesBlue.jpg'
import shoesRed from '../../../Assets/shoesRed.jpg'
import shoesGreen from '../../../Assets/shoesGreen.jpg'
import shoesPremium from '../../../Assets/shoesPremium.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <section className="categories outer container center" aria-label='Shoe Category Section'>
        <div className="categories inner container" aria-label='Inner section'>
            <Link to='' className="category_wrap center">
                <img src={shoesComfort} alt="" />
                <span>Comfort</span>
            </Link>
            <Link to='' className="category_wrap center">
                <img src={shoesBlue} alt="" />
                <span>Athletic</span>
            </Link>
            <Link to='' className="category_wrap center">
                <img src={shoesGreen} alt="" />
                <span>Classic</span>
            </Link>
            <Link to='' className="category_wrap center">
                <img src={shoesPremium} alt="" />
                <span>Premium</span>
            </Link>
        </div>
    </section>
  )
}

export default Categories