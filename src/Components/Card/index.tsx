import { FunctionComponent } from 'react';
import { Money } from '../Money';
import { Input } from '../Input';
import { Star } from '../Star';

interface CardProps {
  img: string;
  title: string;
  description: string;
  callToAction?: string;
  price?: number;
  oldPrice?: number;
  noStock?: boolean;
  promoted?: boolean;
}

const Card: FunctionComponent<CardProps> = ({
  img,
  title,
  description,
  callToAction = 'Add',
  price,
  oldPrice,
  noStock = false,
  promoted,
}) => {
  return (
    <div className='flex flex-col justify-evenly relative px-4 py-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg '>
      <div className='flex flex-row py-8 px-8 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        {promoted && <Star />}
        <img
          className={`block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 ${
            noStock ? 'grayscale' : ''
          }`}
          src={img}
          alt='toolbox'
        />
        <div className='flex flex-col space-y-2'>
          <div className='block space-y-2'>
            <p className='text-lg text-black font-semibold whitespace-nowrap'>
              {title}
            </p>
            <Money oldValue={oldPrice}>{price}</Money>
            <p className='text-slate-500 font-medium'>{description}</p>
          </div>
        </div>
      </div>
      {noStock ? (
        <div className='flex flex-col gap-2'>
          <Input type='email' placeholder='E-mail' />
          <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
            Notify me!
          </button>
        </div>
      ) : (
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
          {callToAction}
        </button>
      )}
    </div>
  );
};

export default Card;
