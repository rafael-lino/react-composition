import { FunctionComponent } from 'react';
import { Money } from './Money';

interface CardProps {
  img: string;
  title: string;
  description: string;
  callToAction?: string;
  price?: number;
  oldPrice?: number;
}

const Card: FunctionComponent<CardProps> = ({
  img,
  title,
  description,
  callToAction = 'Add',
  price,
  oldPrice,
}) => {
  return (
    <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <img
        className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0'
        src={img}
        alt='toolbox'
      />
      <div className='flex flex-col items-end text-center space-y-2 sm:text-left'>
        <div className='space-y-2'>
          <div>
            <p className='text-lg text-black font-semibold'>{title}</p>
            <Money oldValue={oldPrice}>{price}</Money>
          </div>
          <p className='text-slate-500 font-medium'>{description}</p>
        </div>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
          {callToAction}
        </button>
      </div>
    </div>
  );
};

export default Card;
