import React from 'react';

export const Product = ({ name, description, price, date }) => {
  return (
    <div className='max-w-md  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {name}
      </h5>
      <span className='text-grey-300 font-medium rounded-lg text-sm'>
        {date}
      </span>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {description}
      </p>
      <div className='flex items-center justify-between'>
        <span className='text-2xl font-bold text-gray-900 dark:text-white'>
          ${price}
        </span>
      </div>
    </div>
  );
};
