import React from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ children, handleShow }) => {
  return createPortal(
    <div
      className='fixed z-10 left-0 top-0 w-full overflow-auto bg-gray-500 bg-opacity-70 h-screen'
      onClick={handleShow}
    >
      <div
        className='bg-white my-[10%] mx-auto opacity-100 w-[40%]'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};
