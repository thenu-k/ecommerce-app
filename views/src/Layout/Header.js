import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <nav className="center">
          <div className="header top outer" aria-label="Header Top">
            <div className="logo outer header" aria-label='Logo'>
              <h1><a href="/">Shop</a></h1>
            </div>
            <div className="header search_bar outer" aria-label='Search Bar'>
              <form><input type="text" placeholder='Search Items'/></form>
            </div>
            <div className="header action_list outer" aria-label='User Actions'>
              <button className="account_icon outer" aria-label="Account Button">Account</button>
              <button className="cart_icon outer" aria-label="Cart Button">Cart</button>
            </div>
          </div>
          <div className="header bottom outer" aria-label="Header Bottom">
            <ul className="header categories" aria-label='Category List'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new_arrivals">New Arrivals</Link></li>
              <li><Link to="/sale">Sale</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/account">Account</Link></li>
            </ul>
            <div className="header bottom misc_text" aria-label="Misc Text">
              <p>All our products are build from eco-friendly resources</p>
            </div>
          </div>
        </nav>
      </header>
      </>
  )
}

export default Header