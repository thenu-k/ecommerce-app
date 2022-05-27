import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const HeaderLinks:FC = () => {
  return (
    <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search/popular">Popular</Link></li>
        <li><Link to="/search/new">New Arrivals</Link></li>
        <li><Link to="/sale/sale">Sale</Link></li>
    </>
  )
}

export default HeaderLinks