import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import MobileHeader from '../Common/MobileHeader'

const Layout = () => {

  //Checking the screen size
  const [isMobile, setMobile] = useState()
  useEffect(()=>{
    checkMobile()
    window.addEventListener('resize', checkMobile)
    function checkMobile(){
      let windowWidth = window.innerWidth
      if(windowWidth<700){
        setMobile(true)
      }
      if(windowWidth>700){
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
      <div style={{ height: '65px'}}></div> {/*Padding Element*/}
      <Outlet/>
      <Footer/>
    </>
  )
}


export default Layout