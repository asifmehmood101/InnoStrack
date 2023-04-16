import React from 'react';

export const Button = ({ children, ...props }) => {
  return (
    <button
      className='w-1/5 flex-none rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
      {...props}
    >
      {children}
    </button>
  );
};
