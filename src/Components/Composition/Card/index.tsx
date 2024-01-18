import { FunctionComponent, useState } from 'react';

const year = new Date().getFullYear();

interface CardProps {
  title?: string;
}

const Card: FunctionComponent<CardProps> = ({ title }) => {
  const [count, setCount] = useState(0);

  return (
    <div className='card'>
      <p>{title}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>We are in {year}.</p>
    </div>
  );
};

export default Card;
