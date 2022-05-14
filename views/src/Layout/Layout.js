import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import './Main.css'

const Layout = () => {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}


export default Layout