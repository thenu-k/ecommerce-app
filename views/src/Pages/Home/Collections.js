import {React, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Collections.css'
const Image_forHim = require('../../Assets/forHim.jpg')
const Image_forHer = require('../../Assets/forHer.jpg')

const Collections = () => {
    useEffect(()=>{
        // On scroll function
        const check_appear = ()=>{
            //Screen height
            const screen_height = window.innerHeight
            scroll_elements.forEach((element)=>{
                let distance_to_top = element.getBoundingClientRect().top
                if(distance_to_top <= screen_height + offset_value){
                    element.classList.remove('to-animate')
                    element.classList.add('animate-now')
                }
            })
        }
        const offset_value = -50
        const scroll_elements = document.querySelectorAll('.to-animate')
        document.addEventListener('scroll', check_appear)
    },[])
  return (
    <>
    <section className="collections container outer" aria-label='Collections'>
        <div className="collections container inner to-animate">
            <Link to='' className="collections collection_wrap forHim outer center appearOnScroll" aria-label='For Him'>
                <img src={Image_forHim} alt="For him: Image" loading='lazy'/>
            </Link>
            <Link to='' className="collections collection_wrap forHer outer center" aria-label="For Her">
                <img src={Image_forHer} alt="For her: Image" loading='lazy'/>
            </Link>
        </div>
    </section>
    </>
  )
}

export default Collections