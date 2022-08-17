import React, { useEffect, useState } from 'react';
import { CardsContainer } from './styles';
import Card from '../Card/Card';
import { getUserPlans } from '../../requests';

const cardInfo = [
  {
    title: 'Basic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Der mudo alofe mucho.',
    price: '5$',
  },
  {
    title: 'Premium',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Der mudo alofe mucho.',
    price: '15$',
  },
  {
    title: 'Ultimate',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Der mudo alofe mucho.',
    price: '30$',
  },
];


// @ts-ignore
const Cards:React.FC = () => {
  const [packageName, setPackageName] = useState('')

  useEffect(() => {
    getUserPlans().then(res => setPackageName(res[0]?.package))
  }, []);

  return (
    <>
      <CardsContainer>
        {cardInfo.map(({title, price, text}, index) => (
          <Card key={index} title={title} price={price} text={text} packageName={packageName}/>
        ))}
      </CardsContainer>
    </>
  );
};

export default Cards;