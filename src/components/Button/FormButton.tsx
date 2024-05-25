import React, { useState } from 'react'
import '../../styles/components/_button.scss'
type Btn = {
    text: string;
  isValid: boolean;
  onClick: () => void;
}

const FormButton = ({ text, isValid, onClick }: Btn) => {
    
    return (
        <button type='button' className={`formbtn ${isValid ? 'formbtn' : 'formbtn--disable'}`} disabled={!isValid} onClick={onClick}>      
      {text}
    </button>
  )
}


export default FormButton;
