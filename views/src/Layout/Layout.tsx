import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
//Redux
import {useDispatch, useSelector} from 'react-redux'; import { setScreenType } from '../StateManager/mainSlice';

//Components
import Footer from '../Common/Footer/Footer';import Header from '../Common/Header/Header';import MobileHeader from '../Common/MobileHeader/MobileHeader'

const Layout = () => {
  //Redux states
  const {isMobile} = useSelector((state:any)=>state.isMobile)
  const dispatch = useDispatch()
  
  function checkMobile(){
    const screenWidth = window.innerWidth
    if(screenWidth<700 && isMobile!==true){dispatch(setScreenType(true)); window.removeEventListener('resize', checkMobile)}   //Remove the event listener to prevent STATE FREEZE.
    if(screenWidth>700 && isMobile!==false){dispatch(setScreenType(false)); window.removeEventListener('resize', checkMobile)}
  }

  //Checks
  useEffect(()=>{window.addEventListener('resize', checkMobile)})  //Every render                                     //The order matters!!! Line 21 will remove the event un-required event listener on the page.
  useEffect(()=>{checkMobile()},[])     //First time only                                                             //On the first run, the function will remove an event listener that doesn't exist. But that's ok(?).
  
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