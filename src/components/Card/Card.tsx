import React from 'react';
import { Content, Wrapper } from './styles';
import { CardProps } from '../types';
import { Title, Text, Button } from '../theme';
import { addNewPlan } from '../../requests';
import { useNavigate } from 'react-router-dom';

const Card:React.FC<CardProps> = ({title, price, text, packageName}) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Content>
        <Title fontSize='22px'>{title}</Title>
        <Text margin='0 0 16px 0'>{text}</Text>
        <Title fontSize='55px'>{price}</Title>
        {packageName === title.toLowerCase()
          ? <Button color='#9c9c9c' background='#5a5a5a' cursor='auto'>Purchase</Button>
          : <Button onClick={() => addNewPlan(title, navigate)}>Purchase</Button>
        }
      </Content>
    </Wrapper>
  );
};

export default Card;