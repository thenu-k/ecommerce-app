import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer' ;import Header from './Header';import MobileHeader from './MobileHeader'
import './Footer.css' 

const Layout = () => {

  //Checking the screen size
  const [isMobile, setMobile] = useState()
  useEffect(()=>{
    checkMobile()
    window.addEventListener('resize', checkMobile)
    function checkMobile(){
      let windowWidth = window.innerWidth
      if(windowWidth<650){
        setMobile(true)
      }
      if(windowWidth>650){
        setMobile(false)
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
      <Outlet/>
      <Footer/>
    </>
  )
}


export default Layout