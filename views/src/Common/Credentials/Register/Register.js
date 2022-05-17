import React, {useEffect} from 'react'
import './Register.css'

const Register = () => {

  //Focus nearest input
  const focusInput = (e) => {
    e.target.closest('.form-element').querySelector('input').focus()
  }
  //Permanently move label
  const permanentlyMove = (e) => {
    console.log('Hmm?')
    const label_element = e.target.closest('.form-element').querySelector('label')
    if(e.target.value!=''){
      label_element.classList.add('move')
    }
    if(e.target.value==='' && label_element.classList.contains('move')){
      label_element.classList.remove('move')
    }
  }

  return (
    <>
      <div className="register outer">
          <h4>Create an Account</h4>
          <form className="register">
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
            <button className='login last'>Login</button>
          </form>
      </div>
    </>
  )
}

export default Register