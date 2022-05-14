import React, {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import './Header.css'
import './MobileHeader.css'
import './Footer.css'
import MobileHeader from './MobileHeader'

const Layout = () => {

  const [isMobile, setMobile] = useState()

  useEffect(()=>{
    checkMobile()
    window.addEventListener('resize', checkMobile)
    function checkMobile(){
      let windowWidth = window.innerWidth
      if(windowWidth<1000){
        setMobile(true)
      }
      if(windowWidth>1000){
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