import { FunctionComponent, PropsWithChildren } from 'react';
import { Input } from '../../../Input';

export const CardNotifyAction: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <Input type='email' placeholder='E-mail' />
      <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
        {children}
      </button>
    </div>
  );
};
