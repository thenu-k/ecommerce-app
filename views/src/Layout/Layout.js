import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
//Redux
import {useDispatch, useSelector} from 'react-redux'; import { setScreenType } from '../StateManager/mainSlice';
//Components
import Footer from '../Common/Footer/Footer.js';import Header from '../Common/Header/Header.js';import MobileHeader from '../Common/MobileHeader/MobileHeader.js'

const Layout = () => {

  //Redux states
  const {isMobile} = useSelector((state)=>state.isMobile)
  const dispatch = useDispatch()

  //Screen Size
  useEffect(()=>{
    checkMobile()
    window.addEventListener('resize', checkMobile)
    function checkMobile(){
      let windowWidth = window.innerWidth
      if(windowWidth<700 && isMobile!=true){
        dispatch(setScreenType(true))
      }
      if(windowWidth>700  && isMobile!=false){
        dispatch(setScreenType(false))
      }
    }
  },[isMobile])

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