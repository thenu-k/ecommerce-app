import React, {FC, useRef} from 'react'
import './Gallery.css'
import Image1 from './../../../Assets/itemPage1.jpg'

interface IProps {
    details: any
}

//FC
const Main: FC<IProps> = (props) => {
  //Refs
  const carouselContainer = useRef<any | undefined>()

  
  //Carousel 
  const moveCarousel = (direction: string):void => {
    const scrollLimit = 100; let scrolled =0

    if(direction==="Down"){
      var scrollDown = setInterval(()=>{
        if(scrolled<scrollLimit){
           carouselContainer.current.scrollTop += 10
        }else{clearInterval(scrollDown)}
          scrolled +=10
      }, 10)
    }
    if(direction==="Up"){
      var scrollUp = setInterval(()=>{
        if(scrolled<scrollLimit){
           carouselContainer.current.scrollTop -= 10
        }else{clearInterval(scrollUp)}
          scrolled +=10
      }, 10)
    }
  }

  return (
    <section className="gallery container outer itemPage">
        
        <div className="gallery carousel outer">
          <button onClick={()=>moveCarousel("Up")} className='gallery up button'>Up</button>
          <button onClick={()=>moveCarousel("Down")} className='gallery button down'>Down</button>

          <div className="gallery carousel scroll" ref={carouselContainer}>
            <div className="gallery carousel inner">
              <div className="wrap"></div><div className="wrap"></div><div className="wrap"></div><div className="wrap"></div>
            </div>
          </div>
        </div>

        <div className="selected_image outer center">
          <img src={Image1} alt="" />
        </div>
    </section>
  )
}

export default Main