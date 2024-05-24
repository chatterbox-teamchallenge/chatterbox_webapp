import React from 'react'
import '../../styles/components/_start.scss'
import { useNavigate } from 'react-router-dom';


import logo from '../../img/logo.png'
import google from '../../icons/google.png'
import Button from '../../components/Button/Button'
const Start = () => {
  const navigate = useNavigate();
  
  return (
    <div className='start__container container'>
      <img src={logo} alt="logo" className='start__logo'/>
      <h1 className='start__title'>Chatterbox</h1>
      <h3 className='start__subtitle'>Log in</h3>

      <div className='start__btns' onClick={() => {navigate('register')}}>
        <div className='btn__container'>
          <Button text='With email' />
        </div>
        <div className='btn__container'>
          <img src={google} alt="google"  className='btn__icon'/>
          <Button text='With Google'  />
        </div>
        
      </div>
      
      <div className='start__register'>
        <p className='start__text'>Don't have an account?</p>
        <a href="!#" className='start__link'>Register</a>
      </div>
    </div>
  )
}

export default Start
