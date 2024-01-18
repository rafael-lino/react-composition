import { FunctionComponent, PropsWithChildren } from 'react';

interface CardtitleProps {
  title: string;
  description: string;
}
export const CardTitle: FunctionComponent<
  PropsWithChildren<CardtitleProps>
> = ({ title, description, children }) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='block space-y-2'>
        <p className='text-lg text-black font-semibold whitespace-nowrap'>
          {title}
        </p>
        {children}
        <p className='text-slate-500 font-medium'>{description}</p>
      </div>
    </div>
  );
};
