import React, {useEffect, useState} from 'react'
import './Register.css'

//Redux
import {useSelector} from 'react-redux'; 


const Register = () => {

  //Focus nearest input
  const focusInput = (e) => {
    e.target.closest('.form-element').querySelector('input').focus()
  }

  //Permanently move label
  const permanentlyMove = (e) => {
    const label_element = e.target.closest('.form-element').querySelector('label')
    if(e.target.value!=''){
      label_element.classList.add('move')
    }
    if(e.target.value==='' && label_element.classList.contains('move')){
      label_element.classList.remove('move')
    }
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
      <div className="register outer">
          <h4>Create an Account</h4>

          <form className="register" onSubmit={(e)=>registerUser(e)}>
            <div className="email register  form-element">
              <input type="text" autoComplete='email'  onChange={e => permanentlyMove(e)}/>
              <label for="Email(Register)"onClick={(e)=>focusInput(e)}>E-mail</label>
            </div>
            <div className="password register  form-element">
              <input type="password" onChange={e => permanentlyMove(e)}/>
              <label for="Password(Register)"onClick={(e)=>focusInput(e)}>Password</label>
            </div>
            <div className="password-reenter register  form-element">
              <input type="password" onChange={e => permanentlyMove(e)}/>
              <label  for="Password(Register)-Re-enter"onClick={(e)=>focusInput(e)}>Re enter Password</label>
            </div>
            
            <p className='termsConditions regsiter'>By clicking next, you agree to our terms and conditions. Blah, blah random corporate speak.</p>

            <button type='submit' className='next last'>Next</button>
          </form>

          <button className='login last'>Login Instead</button>
      </div>
    </>
  )
}

export default Register