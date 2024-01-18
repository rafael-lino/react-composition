import { FunctionComponent, PropsWithChildren } from 'react';

interface MoneyProps {
  oldValue?: number;
}

export const Money: FunctionComponent<PropsWithChildren<MoneyProps>> = ({
  children,
  oldValue,
}) => {
  return children ? (
    <div className='flex flex-row gap-1 font-bold text-lg'>
      {oldValue && (
        <span className='text-gray-300 line-through font-normal'>R$ {oldValue}</span>
      )}
      R$ {children}
    </div>
  ) : null;
};
