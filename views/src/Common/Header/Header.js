import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Header.css' ;
import HeaderLinks from '../HeaderLinks';
import Credentials from '../Credentials/Credentials';

//Redux
import {useDispatch, useSelector} from 'react-redux'; import { toggleCredentials } from '../../StateManager/mainSlice';

//Icons
const Icon_userAccount = require( './../../Assets/user-account.png')
const Icon_cart = require('./../../Assets/cart.png')
const Icon_logo = require('./../../Assets/logo.png')

//Types



const Header = (props) => {
  const dispatch = useDispatch()
  const {displayCredentials} = useSelector((state)=> state.displayCredentials)

  return (
    <>
    <header aria-label='Header'>
        <nav className="center" aria-label='Navigation'>
          <div className="logo outer header" aria-label='Logo'>
            <h1><Link to=''>GENESIS</Link></h1>
          </div>
          <div className="header search_bar outer" aria-label='Search Bar'>
            <ul className='header categories' aria-label='Category List'>
              <HeaderLinks/>
            </ul>
          </div>
          <div className="header action_list outer" aria-label='User Actions'>
            <button className="account_icon outer" aria-label="Account Button" onClick={()=> dispatch(toggleCredentials())}><img src={Icon_userAccount}/></button>
            <button className="cart_icon outer" aria-label="Cart Button"><img src={Icon_cart}/></button>
          </div>
        </nav>
      </header>

      {/* Credentials page */}
      {
        (props.isMobile===false && displayCredentials===true) 
          ?    <Credentials/>
          :    <></>
      }
      </>
  )
}

export default Header