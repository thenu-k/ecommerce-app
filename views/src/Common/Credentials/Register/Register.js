import React, {useEffect} from 'react'
import './Register.css'

const Register = () => {

  //Focus nearest input
  const focusInput = (e) => {
    e.target.closest('.form-element').querySelector('input').focus()
  }

  return (
    <>
      <div className="register outer">
          <h4>Create an Account</h4>
          <form className="register">
            <div className="email register  form-element">
              <input type="text" autoComplete='email'/>
              <label for="Email(Register)"onClick={(e)=>focusInput(e)}>E-mail</label>
            </div>
            <div className="password register  form-element">
              <input type="text"/>
              <label for="Password(Register)"onClick={(e)=>focusInput(e)}>Password</label>
            </div>
            <div className="password-reenter register  form-element">
              <input type="text"/>
              <label  for="Password(Register)-Re-enter"onClick={(e)=>focusInput(e)}>Re enter Password</label>
            </div>
          </form>
      </div>
    </>
  )
}

export default Register