import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import './Header.css'
import './Footer.css'
import MobileHeader from './MobileHeader'

const Layout = () => {

  return (
    <>
      <Header/>
      <MobileHeader/>
      <Outlet/>
      <Footer/>
    </>
  )
}


export default Layout