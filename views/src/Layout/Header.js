import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Header.css' ;
const Icon_userAccount = require( './../Assets/user-account.png')
const Icon_cart = require('./../Assets/cart.png')
const Icon_logo = require('./../Assets/logo.png')

const Header = (props) => {
  return (
    <>
    <header aria-label='Header'>
        <nav className="center" aria-label='Navigation'>
          <div className="header top outer" aria-label="Header Top">
            <div className="logo outer header" aria-label='Logo'>
              <h1><a href="/"><img src={Icon_logo} alt="Logo"/></a></h1>
            </div>
            <div className="header search_bar outer" aria-label='Search Bar'>
              <form className="center" aria-label='Search'><input type="text" placeholder='Search Items'/></form>
            </div>
            <div className="header action_list outer" aria-label='User Actions'>
              <button className="account_icon outer" aria-label="Account Button"><img src={Icon_userAccount}/></button>
              <button className="cart_icon outer" aria-label="Cart Button"><img src={Icon_cart}/></button>
            </div>
          </div>
          <div className="header bottom outer" aria-label="Header Bottom">
            <ul className='header categories' aria-label='Category List'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new_arrivals">New Arrivals</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/sale">Sale</Link></li>
              <li><Link to="/account">Account</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      </>
  )
}

export default Header