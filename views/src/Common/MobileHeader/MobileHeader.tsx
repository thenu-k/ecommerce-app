import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderLinks from '../HeaderLinks';
import './MobileHeader.css' ;
const Icon_userAccount = require( './../../Assets/user-account.png')
const Icon_cart = require('./../../Assets/cart.png')
const Icon_hamburger = require('./../../Assets/hamburgerIcon.png')


const MobileHeader = () => {
  const dispatch = useDispatch()
  const [menuVisible, setMenuVisible] = useState('notVisible')
  const {cartItems} = useSelector((state:any)=>state.cartItems)

  //Updating the cart count
  useEffect(()=>{
    let numItems = cartItems.length
    const cartCountElement = document.querySelector('.cart_icon_qty')
    // @ts-ignore
    if(numItems===0){cartCountElement.style.display = 'none'}else{cartCountElement.style.display = 'flex'}
    // @ts-ignore
    cartCountElement.innerHTML = numItems
  }, [cartItems])

  useEffect(() => {
    //Menu click out to close
    const click_area = document.querySelector('header.mobile .links.outer .clickable')
    click_area?.addEventListener('click', ()=>{
      setMenuVisible('notVisible')
    })
  }, [])   //Important. We only need the event listener on the first time. Otherwise there will be multiple. We don't need to remove this event listener as no state is REQUIRED by the function. It will only set the state.

  function makeVisible(){
    if(menuVisible==='notVisible'){setMenuVisible('visible')}
    if(menuVisible==='visible'){setMenuVisible('notVisible')}
  }
  
  return (
    <header className='mobile header outer' aria-label='Header'>
        <nav>
         <button className='header menu_icon center' onClick={()=>makeVisible()} ><img src={Icon_hamburger}/></button>
          <div className="logo outer header center" aria-label='Logo'>
                <h1><Link to=''>GENESIS</Link></h1>
          </div>
          <button className="cart_icon outer center" aria-label="Cart Button"><img src={Icon_cart}/><span className="cart_icon_qty">2</span></button>
          <div className="links outer" id={menuVisible}>
            <div className="clickable" aria-label='Ignore: Placeholder Element'></div>
            <div className="links inner">
              <h3>Pages</h3>
              <ul>
                <HeaderLinks/>
              </ul>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default MobileHeader