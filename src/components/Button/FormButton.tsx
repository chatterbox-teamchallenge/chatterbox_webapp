import React, { useState } from 'react'
import '../../styles/components/_button.scss'
type Btn = {
  text: string;
}

const FormButton = ({ text}: Btn) => {
    const [isDisable, setIsDisable] = useState(false)

    const enableButton = (e:any) => {
        setIsDisable(true);
        e.target.classList.remove('formbtn--disable');
    };
    
  return (
      <button type='button' className='formbtn formbtn--disable' disabled={isDisable} >      
      {text}
    </button>
  )
}


export default FormButton;
