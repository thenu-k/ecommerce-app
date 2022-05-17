import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
//Redux
import {useDispatch, useSelector} from 'react-redux'; import { setScreenType } from '../StateManager/mainSlice';
//Components
import Footer from '../Common/Footer/Footer.js';import Header from '../Common/Header/Header.js';import MobileHeader from '../Common/MobileHeader/MobileHeader.js'

const Layout = () => {
  console.log("Inside component")
  //Redux states
  const {isMobile} = useSelector((state)=>state.isMobile)
  const dispatch = useDispatch()
  
  function checkMobile(){
    const screenWidth = window.innerWidth
    if(screenWidth<700 && isMobile!=true){dispatch(setScreenType(true)); window.removeEventListener('resize', checkMobile)}
    if(screenWidth>700 && isMobile!=false){dispatch(setScreenType(false)); window.removeEventListener('resize', checkMobile)}
  }

  //Checks
  useEffect(()=>{console.log("Inside init"); checkMobile()},[])
  useEffect(()=>{
    window.addEventListener('resize', checkMobile)
  })
  
  return (
    <>
      {
        isMobile 
          ?    <MobileHeader/>
          :    <Header isMobile={isMobile}/>
      }
      <div style={{ height: '65px'}}></div> {/*Padding Element*/}
      <Outlet/>
      <Footer/>
    </>
  )
}


export default Layout


//Eureka! redux states cannot be called up inside useEffect!!!