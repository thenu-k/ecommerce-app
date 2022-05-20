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
  const container = useRef<any | undefined>()
  const upButton = useRef<any | undefined>(); const downButton = useRef<any | undefined>()

  
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
      // checkUpButtonAppear()
      // checkDownButtonAppear()
    }
    if(direction==="Up"){
      var scrollUp = setInterval(()=>{
        if(scrolled<scrollLimit){
           carouselContainer.current.scrollTop -= 10
        }else{clearInterval(scrollUp)}
          scrolled +=10
      }, 10)
      // checkUpButtonAppear()
      // checkDownButtonAppear()
    }
  }

  //Displaying and removing carousel buttons
  // const checkUpButtonAppear = ():void => {
  //   const distance_parentToTop = carouselContainer.current.getBoundingClientRect().top;
  //   const distance_childToTop = container.current.getBoundingClientRect().top
  //   if(distance_childToTop>= distance_parentToTop){upButton.current.classList.add('disappear')}else{upButton.current.classList.remove('disappear')}
  //   if(downButton.current.classList.contains('disappear')){downButton.current.classList.remove('disappear')}
  // }
  // const checkDownButtonAppear = ():void => {
  //   const distance_parentToBottom = carouselContainer.current.getBoundingClientRect().bottom;
  //   const distance_childToBottom = container.current.getBoundingClientRect().bottom
  //   if(distance_childToBottom<= distance_parentToBottom){console.log("Reached bottom");downButton.current.classList.add('disappear')}else{downButton.current.classList.remove('disappear')}
  //   if(upButton.current.classList.contains('disappear')){upButton.current.classList.remove('disappear')}
  // }

  return (
    <section className="gallery container outer itemPage">
        
        <div className="gallery carousel outer">
          <button onClick={()=>moveCarousel("Up")} className='gallery up button' ref={upButton}>Up</button>
          <button onClick={()=>moveCarousel("Down")} className='gallery button down' ref={downButton}>Down</button>

          <div className="gallery carousel scroll" ref={carouselContainer}>
            <div className="gallery carousel inner" ref={container}>
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