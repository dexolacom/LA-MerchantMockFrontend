import React from 'react';
import { CardsContainer } from './styles';
import Card from '../Card/Card';

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
const Cards:React.FC = ({ setIsSubPurchased }:{setIsSubPurchased: (b: boolean) => void}) => {
  return (
    <>
      <CardsContainer>
        {cardInfo.map(({title, price, text}, index) => (
          <Card key={index} title={title} price={price} text={text} setIsSubPurchased={setIsSubPurchased}/>
        ))}
      </CardsContainer>
    </>
  );
};

export default Cards;