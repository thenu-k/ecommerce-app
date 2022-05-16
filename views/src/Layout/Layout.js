import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
//Redux
import {useDispatch, useSelector} from 'react-redux'; import { setScreenType } from '../StateManager/mainSlice';
//Components
import Footer from '../Common/Footer';import Header from '../Common/Header';import MobileHeader from '../Common/MobileHeader'

const Layout = () => {

  //Redux state: Screen Size
  const {isMobile} = useSelector((state)=>state.isMobile)
  const dispatch = useDispatch()
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
        isMobile ?
          <MobileHeader/>
          :
          <Header/>
      }
      <div style={{ height: '65px'}}></div> {/*Padding Element*/}
      <Outlet/>
      <Footer/>
    </>
  )
}


export default Layout