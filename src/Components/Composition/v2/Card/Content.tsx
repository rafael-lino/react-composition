import { FunctionComponent, PropsWithChildren } from 'react';

export const CardContent: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='flex flex-row py-8 px-8 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      {children}
    </div>
  );
};
