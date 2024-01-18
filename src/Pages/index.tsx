import Card from '../Components/Card';
import Card2 from '../Components/Composition/Card';
import toolbox from '../assets/toolbox.webp';
import toolbox2 from '../assets/toolbox2.jpeg';
import toolbox3 from '../assets/toolbox3.jpg';
export const Page1 = () => {
  return (
    <>
      <Card
        img={toolbox}
        title='Toolbox'
        description='Very usefull for your daily life'
      />
      <Card
        img={toolbox2}
        title='Amazing Toolbox'
        description='The best toolbox'
      />
      <Card
        img={toolbox3}
        title='Stanley Toolbox'
        description='Most purchased toolbox!'
      />
    </>
  );
};

export const Page2 = () => {
  return (
    <>
      <Card
        img={toolbox}
        title='Toolbox'
        description='Very usefull for your daily life'
        price={100}
      />
      <Card
        img={toolbox2}
        title='Amazing Toolbox'
        description='The best toolbox'
        price={89}
        oldPrice={99}
      />
      <Card
        img={toolbox3}
        title='Stanley Toolbox'
        description='Most purchased toolbox!'
        price={120}
      />
    </>
  );
};

export const Page3 = () => {
  return <Card2 title='another other card' />;
};
