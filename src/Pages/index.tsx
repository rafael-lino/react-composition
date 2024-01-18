import CardOne from '../Components/Card';
import Card2 from '../Components/Composition/v1/Card';
import { Card } from '../Components/Composition/v2/Card';
import { CardAddAction } from '../Components/Composition/v1/Card/CardAddAction';
import { CardContent } from '../Components/Composition/v1/Card/CardContent';
import { CardImg } from '../Components/Composition/v1/Card/CardImg';
import { CardNotifyAction } from '../Components/Composition/v1/Card/CardNotifyAction';
import { CardTitle } from '../Components/Composition/v1/Card/CardTitle';
import { Money } from '../Components/Money';
import { Star } from '../Components/Star';

import toolbox from '../assets/toolbox.webp';
import toolbox2 from '../assets/toolbox2.jpeg';
import toolbox3 from '../assets/toolbox3.jpg';
import toolbox4 from '../assets/toolbox4.jpeg';

export const Page1 = () => {
  return (
    <>
      <CardOne
        img={toolbox}
        title='Toolbox'
        description='Very usefull for your daily life'
      />
      <CardOne
        img={toolbox2}
        title='Amazing Toolbox'
        description='The best toolbox'
      />
      <CardOne
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
      <CardOne
        img={toolbox}
        title='Toolbox'
        description='Very usefull for your daily life'
        price={100}
      />
      <CardOne
        img={toolbox2}
        title='Amazing Toolbox'
        description='The best toolbox'
        price={89}
        oldPrice={99}
      />
      <CardOne
        img={toolbox3}
        title='Stanley Toolbox'
        description='Most purchased toolbox!'
        price={120}
      />
    </>
  );
};

export const Page3 = () => {
  return (
    <>
      <CardOne
        img={toolbox}
        title='Toolbox'
        description='Very usefull for your daily life'
        price={100}
      />
      <CardOne
        img={toolbox2}
        title='Amazing Toolbox'
        description='The best toolbox ever'
        price={89}
        oldPrice={99}
      />
      <CardOne
        img={toolbox4}
        title='Professional Toolbox'
        description='Exclusive!'
        price={200}
        promoted={true}
      />
      <CardOne
        img={toolbox3}
        title='Stanley Toolbox'
        description='Most purchased toolbox!'
        price={120}
        noStock={true}
      />
    </>
  );
};

export const Page4 = () => {
  return (
    <>
      <Card2>
        <>
          <CardContent>
            <CardImg available={true} src={toolbox}></CardImg>
            <CardTitle
              title='Toolbox'
              description='Very usefull for your daily life'
            >
              <Money>100</Money>
            </CardTitle>
          </CardContent>
          <CardAddAction>Add</CardAddAction>
        </>
      </Card2>
      <Card2>
        <>
          <CardContent>
            <CardImg available={true} src={toolbox2}></CardImg>
            <CardTitle
              title='Amazing Toolbox'
              description='The best toolbox ever'
            >
              <Money oldValue={99}>89</Money>
            </CardTitle>
          </CardContent>
          <CardAddAction>Add</CardAddAction>
        </>
      </Card2>
      <Card2>
        <>
          <CardContent>
            <CardImg available={false} src={toolbox3}></CardImg>
            <CardTitle
              title='Stanley Toolbox'
              description='Most purchased toolbox!'
            >
              <Money>120</Money>
            </CardTitle>
          </CardContent>
          <CardAddAction>Notify Me!</CardAddAction>
        </>
      </Card2>
      <Card2>
        <>
          <CardContent>
            <Star />
            <CardImg available={true} src={toolbox4} />
            <CardTitle title='Professional Toolbox' description='Exclusive!'>
              <Money>120</Money>
            </CardTitle>
          </CardContent>
          <CardNotifyAction>Notify Me!</CardNotifyAction>
        </>
      </Card2>
    </>
  );
};

export const Page5 = () => {
  return (
    <>
      <Card.Root>
        <>
          <Card.Content>
            <Card.Img available={true} src={toolbox}></Card.Img>
            <Card.Title
              title='Toolbox'
              description='Very usefull for your daily life'
            >
              <Money>100</Money>
            </Card.Title>
          </Card.Content>
          <Card.Add>Add</Card.Add>
        </>
      </Card.Root>
      <Card.Root>
        <>
          <Card.Content>
            <Card.Img available={true} src={toolbox2}></Card.Img>
            <Card.Title
              title='Amazing Toolbox'
              description='The best toolbox ever'
            >
              <Money oldValue={99}>89</Money>
            </Card.Title>
          </Card.Content>
          <Card.Add>Add</Card.Add>
        </>
      </Card.Root>
      <Card.Root>
        <>
          <Card.Content>
            <Card.Img available={false} src={toolbox3}></Card.Img>
            <CardTitle
              title='Stanley Toolbox'
              description='Most purchased toolbox!'
            >
              <Money>120</Money>
            </CardTitle>
          </Card.Content>
          <Card.Add>Notify Me!</Card.Add>
        </>
      </Card.Root>
      <Card.Root>
        <>
          <Card.Content>
            <Star />
            <Card.Img available={true} src={toolbox4} />
            <Card.Title title='Professional Toolbox' description='Exclusive!'>
              <Money>120</Money>
            </Card.Title>
          </Card.Content>
          <Card.Notify>Notify Me!</Card.Notify>
        </>
      </Card.Root>
    </>
  );
};
