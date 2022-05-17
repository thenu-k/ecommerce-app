import React, {useState, useEffect} from 'react'
import './Credentials.css'
import SignIn from './SignIn/SignIn.js'; import Register from './Register/Register.js'
import { useSelector, useDispatch } from 'react-redux';
import { toggleCredentials } from '../../StateManager/mainSlice';

//Icons
const Icon_close = require('../../Assets/closeIcon.png')

const Credentials = () => {
  
  //Register or Login?
  const [isRegister, setIsRegister] = useState(true)

  //Redux
  const dispatch = useDispatch()
  const {displayCredentials} = useSelector(state => state.displayCredentials)

  //Remove Credentials page on outer click
  useEffect(()=>{
    document.querySelector('.credentials.outer.container').addEventListener('click', (e)=>{
      if(e.target===document.querySelector('.container.outer.credentials')){
        dispatch(toggleCredentials(false))
      }
    })
  },[isRegister, displayCredentials])

  return (
    <>
      <section className="credentials outer container">
        <section className="credentials inner container">
          <div className="credentials heading">
            <h3>Login or Create an Account</h3>
            <button onClick={()=> dispatch(toggleCredentials(false))}> <div className="closeIcon outer credentials"><img src={Icon_close} alt=""/></div> </button>
          </div>
          {
            isRegister
                ? <Register/>
                : <SignIn/>
          }
        </section>
      </section>
    </>
  )
}

export default Credentials