import React, {useEffect, useState} from 'react'
import './Register.css'

//Redux
import {useDispatch, useSelector} from 'react-redux'; 
import {setIsRegister} from '../../../StateManager/mainSlice'

const Register = () => {

  //User wants to register or login?
  const dispatch = useDispatch()

  //Focus nearest input
  const focusInput = (e) => {
    e.target.closest('.form-element').querySelector('input').focus()
  }

  //Permanently move label
  const checkMove = (e) => {
    const label_element = e.target.closest('.form-element').querySelector('label')
    if(e.target.value!=''){
      label_element.classList.add('move')
    }
    // if(e.target.value==='' && label_element.classList.contains('move')){
    //   label_element.classList.remove('move')
    // }
  }

  //Register user function
  const {metaInfo} = useSelector((state)=> state.metaInfo)
  const registerUserURL = metaInfo.registerUserURL
  const registerUser = (e) => {
    e.preventDefault();
    const form_element = e.target
    const email_element = form_element.querySelector('.register input'); const pass_element = form_element.querySelector('.password input'); 
    const userDetails = {
      email: email_element.value, password: pass_element.value
    }
    fetch(registerUserURL, {
      method: "POST", body: JSON.stringify(userDetails), headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Method' : 'POST',
      }
    })
  }

  return (
    <>
      <div className="register outer register_login">
          <h4>Create an Account</h4>

          <form className="register register_login" onSubmit={(e)=>registerUser(e)}>
            <div className="email register register_login  form-element">
              <input type="text" autoComplete='email'  onChange={e => checkMove(e)}/>
              <label for="Email(Register)"onClick={(e)=>focusInput(e)}>E-mail</label>
            </div>
            <div className="password register register_login  form-element">
              <input type="password" onChange={e => checkMove(e)}/>
              <label for="Password(Register)"onClick={(e)=>focusInput(e)}>Password</label>
            </div>
            <div className="password-reenter register register_login  form-element">
              <input type="password" onChange={e => checkMove(e)}/>
              <label  for="Password(Register)-Re-enter"onClick={(e)=>focusInput(e)}>Re enter Password</label>
            </div>
            
            <p className='termsConditions regsiter'>By clicking next, you agree to our terms and conditions. You also agree to sell your soul.</p>

            <button type='submit' className='next last'>Next</button>
          </form>

          <button className='login last' onClick={()=> dispatch(setIsRegister(false))}>Login Instead</button>
      </div>
    </>
  )
}

export default Register