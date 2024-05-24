// import React from 'react'
import '../../styles/components/_modal.scss'
import ModalButton from '../Button/ModalButton'

// const Modal = ({closeModal}: any) => {
//     return (
//     <div className='modal__background'>
//         <div className='modal__container'>
//           <p className='modal__text'>
//               The letter was sent to your email address.
//               <br />
//               Go to confirm your account
//           </p>
//           <Button text={'OK'} />
//     </div>
//     </div>
    
//   )
// }

// export default Modal

import React from 'react'
import  ReactDOM  from 'react-dom';

interface ModalProps {
    onBackdropClick: () => void;
}



const Modal: React.FC<ModalProps> = ({onBackdropClick}) => {
    return ReactDOM.createPortal(
        <div onClick={onBackdropClick} className='modal__background'>
         <div className='modal__container' onClick={e => e.stopPropagation()}>
           <p className='modal__text'>
               The letter was sent to your email address.
               <br />
               Go to confirm your account
                </p>
                <div className='btn__container'>
                <ModalButton text={'OK'}  onClick={onBackdropClick}/>
                </div>
           
    
     </div>
        </div>,
   document.getElementById('modal-root')!);
}

export default Modal
