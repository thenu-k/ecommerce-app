import React, {useEffect, useState} from 'react'
import './MobileHeader.css' ;
const Icon_userAccount = require( './../Assets/user-account.png')
const Icon_cart = require('./../Assets/cart.webp')
const Icon_hamburger = require('./../Assets/hamburgerIcon.png')


const MobileHeader = () => {
  const [menuVisible, setMenuVisible] = useState('notVisible')
  useEffect(() => {}, [menuVisible])   //Importamt
  function makeVisible(){
    if(menuVisible==='notVisible'){setMenuVisible('visible')}
    if(menuVisible==='visible'){setMenuVisible('notVisible')}
  }
  return (
    <header className='mobile header outer' aria-label='Header'>
        <nav>
          <div className="logo outer header center" aria-label='Logo'>
                <h1><a href="/">Shop</a></h1>
          </div>
          <div className="header actions outer" aria-label='Actions'>
              <button className='header menu_icon' onClick={()=>makeVisible()} ><img src={Icon_hamburger}/></button>
              <button className="account_icon outer" aria-label="Account Button"><img src={Icon_userAccount}/></button>
              <button className="cart_icon outer" aria-label="Cart Button"><img src={Icon_cart}/></button>
          </div>
          <div className="links outer" id={menuVisible}>
            asdfasdf
          </div>
        </nav>
    </header>
  )
}

export default MobileHeader