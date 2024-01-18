import { FunctionComponent, PropsWithChildren } from 'react';

const Card: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col justify-evenly relative px-4 py-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg'>
      {children}
    </div>
  );
};

export default Card;
