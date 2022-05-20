import React, {FC, useRef, useState} from 'react'
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

  //States
  const [primaryImgSrc, setPrimaryImgSrc] = useState(props.details.primary_img)

  
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

  //Change primary image function
  const changePrimaryImage = (e: any):void=>{
    const imgSrc = e.target.src    //Apparently the image comes straight away
    setPrimaryImgSrc(imgSrc)
  }

  return (
    <section className="gallery container outer itemPage">
        
        <div className="gallery carousel outer">
          <button onClick={()=>moveCarousel("Up")} className='gallery up button' ref={upButton}>↑</button>
          <button onClick={()=>moveCarousel("Down")} className='gallery button down' ref={downButton}>↓</button>

          <div className="gallery carousel scroll" ref={carouselContainer}>
            <div className="gallery carousel inner" ref={container}>
              <button className="wrap" onClick={(e)=>{changePrimaryImage(e)}}><img src={props.details.primary_img}></img></button>
              <button className="wrap" onClick={(e)=>{changePrimaryImage(e)}}><img src="https://images.pexels.com/photos/1998846/pexels-photo-1998846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img></button>
              <button className="wrap" onClick={(e)=>{changePrimaryImage(e)}}><img src='https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img></button>
              <button className="wrap" onClick={(e)=>{changePrimaryImage(e)}}><img src='https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/></button>
            </div>
          </div>
        </div>

        <div className="selected_image outer center">
          <img src={primaryImgSrc} alt="" />
        </div>
    </section>
  )
}

export default Main