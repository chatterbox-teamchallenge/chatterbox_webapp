import React from 'react'
import '../../styles/components/_button.scss'
type Btn = {
  text: string;
  isValid: boolean;
  onClick: () => void;
}

const Button = ({ text, isValid, onClick }: Btn) => {

  return (
      <button  type='button' className={`btn formbtn ${isValid ? 'formbtn' : 'formbtn--disable'}`} disabled={!isValid} onClick={onClick}>      
      {text}
    </button>
  )
}


export default Button;
