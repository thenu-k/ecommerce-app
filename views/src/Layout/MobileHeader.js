import React from 'react'
const Icon_userAccount = require( './../Assets/user-account.png')
const Icon_cart = require('./../Assets/cart.webp')

const MobileHeader = () => {
  return (
    <header className='mobile header outer'>
        <nav>
        <div className="logo outer header" aria-label='Logo'>
              <h1><a href="/">Shop</a></h1>
        </div>
        <div class="header actions outer">
            <button className='header menu_icon' onClick={()=>console.log("hello")} >|||</button>
            <button className="account_icon outer" aria-label="Account Button"><img src={Icon_userAccount}/></button>
            <button className="cart_icon outer" aria-label="Cart Button"><img src={Icon_cart}/></button>
        </div>
        </nav>
    </header>
  )
}

export default MobileHeader