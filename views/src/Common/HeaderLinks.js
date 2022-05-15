import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLinks = () => {
  return (
    <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search/popular">Popular</Link></li>
        <li><Link to="/search/new">New Arrivals</Link></li>
        <li><Link to="/sale/sale">Sale</Link></li>
        <li><Link to="/account">Account</Link></li>
    </>
  )
}

export default HeaderLinks