import { FunctionComponent, InputHTMLAttributes } from 'react';

export const Input: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <input
      {...props}
      className='w-full border bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
    />
  );
};
