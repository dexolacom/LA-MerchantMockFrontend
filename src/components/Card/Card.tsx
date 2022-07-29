import React from 'react';
import { Content, Wrapper } from './styles';
import { CardProps } from '../types';
import { Title, Text, Button } from '../theme';

const Card:React.FC<CardProps> = ({title, price, text, setIsSubPurchased}) => {
  return (
    <Wrapper>
      <Content>
        <Title fontSize={'22px'}>{title}</Title>
        <Text margin='0 0 16px 0'>{text}</Text>
        <Title fontSize={'55px'}>{price}</Title>
        <Button onClick={() => setIsSubPurchased(true)}>Purchase</Button>
      </Content>
    </Wrapper>
  );
};

export default Card;