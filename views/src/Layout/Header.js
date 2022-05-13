import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <nav class="center">
          <div class="header top outer" aria-label="Header Top">
            <div class="logo outer header" aria-label='Logo'>
              <h1><a href="/">Shop</a></h1>
            </div>
            <div class="header search_bar outer" aria-label='Search Bar'>
              <form><input type="text" placeholder='Search Items'/></form>
            </div>
            <div class="header action_list outer" aria-label='User Actions'>
              <button class="account_icon outer" aria-label="Account Button">Account</button>
              <button class="cart_icon outer" aria-label="Cart Button">Cart</button>
            </div>
          </div>
          <div class="header bottom outer" aria-label="Header Bottom">
            <ul class="header categories" aria-label='Category List'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new_arrivals">New Arrivals</Link></li>
              <li><Link to="/sale">Sale</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/account">Account</Link></li>
            </ul>
            <div class="header bottom misc_text" aria-label="Misc Text">
              <p>All our products are build from eco-friendly resources</p>
            </div>
          </div>
        </nav>
      </header>
      </>
  )
}

export default Header