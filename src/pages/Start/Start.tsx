import React from 'react'
import '../../styles/components/_start.scss'



import logo from '../../img/logo.png'
import google from '../../icons/google.png'
import Button from '../../components/Button/Button'
const Start = () => {
  return (
    <div className='start__container container'>
      <img src={logo} alt="logo" className='start__logo'/>
      <h1 className='start__title'>Chatterbox</h1>
      <h3 className='start__subtitle'>Log in</h3>

      <div className='start__btns'>
        <div className='start__btn'>
          <Button text='With email' />
        </div>
        <div className='start__btn'>
          <img src={google} alt="google" />
          <Button text='With Google' />
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
