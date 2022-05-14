import React, {useEffect, useState} from 'react'
import './MobileHeader.css' ;
const Icon_userAccount = require( './../Assets/user-account.png')
const Icon_cart = require('./../Assets/cart.png')
const Icon_hamburger = require('./../Assets/hamburgerIcon.png')
const Icon_logo = require('./../Assets/logo.png')


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
         <button className='header menu_icon center' onClick={()=>makeVisible()} ><img src={Icon_hamburger}/></button>
          <div className="logo outer header center" aria-label='Logo'>
                <h1><a href="/"><img src={Icon_logo} alt="Logo"/></a></h1>
          </div>
          <button className="cart_icon outer center" aria-label="Cart Button"><img src={Icon_cart}/></button>
          <div className="links outer" id={menuVisible}>
            asdfasdf
          </div>
        </nav>
    </header>
  )
}

export default MobileHeader