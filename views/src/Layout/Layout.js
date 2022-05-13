import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <Outlet/>
    </>
  )
}

export default Layout