import React, { useState } from 'react'
import '../../styles/components/_button.scss'
type Btn = {
    text: string;
    isValid: boolean;
}

const FormButton = ({ text, isValid }: Btn) => {
    const [isDisable, setIsDisable] = useState(true)

    const enableButton = (e: any) => {
        if (isValid) {
            setIsDisable(false);
            e.target.classList.remove('formbtn--disable');
        }
        
    };
    
    return (
        <button type='button' className='formbtn formbtn--disable' disabled={isDisable} >      
      {text}
    </button>
  )
}


export default FormButton;
