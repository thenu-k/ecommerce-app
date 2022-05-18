import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'; import { setIsRegister } from '../../../StateManager/mainSlice';

const SignIn = () => {

  //Login or register?
  const {isRegister} = useSelector(state=> state.isMobile)
  const dispatch = useDispatch()

  //Clicked on label
  const clickedLabel = (e) =>{e.target.classList.add('move')}

  //Input value changed 
  const checkChange = (e) => {
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
      <div class="login register_login outer">
        <h4>Login</h4>

        <form action="" class="login register_login">
          <div class="email login register_login form-element">
            <input type="text" autocomplete='email' onChange={(e)=>checkChange(e)}/>
            <label for="Email(login)" onClick={(e)=>clickedLabel(e)}>E-mail</label>
          </div>
          <div class="password login register_login form-element">
            <input type="password" onChange={(e)=>checkChange(e)}/>
            <label for="Email(login)" onClick={(e)=>clickedLabel(e)}>Password</label>
          </div>

          <button type='submit' className='next next_login last'>Login</button>
        </form>

        <button className='register_login login last' onClick={()=> dispatch(setIsRegister(true))}>Register Instead</button>
      </div>
    </>
  )
}

export default SignIn