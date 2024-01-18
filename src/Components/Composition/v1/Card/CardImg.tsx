import { FunctionComponent } from 'react';

interface CardImgProps {
  available: boolean;
  src: string;
}
export const CardImg: FunctionComponent<CardImgProps> = ({
  available,
  src,
}) => {
  return (
    <img
      className={`block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 ${
        available ? '' : 'grayscale'
      }`}
      src={src}
      alt='toolbox'
    />
  );
};
