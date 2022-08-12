import React from 'react';
import { Text, Title } from '../../components/theme';
import { Wrapper } from './styles';


const HomePage = () => {
  return (
    <Wrapper>
      <Title>Connect to our merchant</Title>
      <Text>
        To see the subscription plans you must be logged in, enter your username and password and click Sing In
        button
      </Text>
    </Wrapper>
  );
};

export default HomePage;