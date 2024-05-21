import React from 'react'
import '../../styles/components/_button.scss'
type Btn = {
    text: string;
}

const Button = ({text}: Btn) => {
  return (
      <button className='btn'>      
      {text}
    </button>
  )
}


export default Button;
