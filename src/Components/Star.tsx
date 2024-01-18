import starImg from '../assets/star.png';

export const Star = () => {
  return (
    <img
      width={24}
      height={24}
      src={starImg}
      alt='start icon'
      className="absolute top-2.5 right-2.5"
      title='promoted!'
    />
  );
};
