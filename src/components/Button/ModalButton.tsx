import React, { useState } from 'react'
import '../../styles/components/_button.scss'
type Btn = {
    text: string;
    onClick: () => void;
}

const ModalButton = ({ text, onClick}: Btn) => {

  return (
      <button className='btn' onClick={onClick}>      
      {text}
    </button>
  )
}


export default ModalButton;