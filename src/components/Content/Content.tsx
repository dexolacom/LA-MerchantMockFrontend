import React, { useEffect } from 'react';
import { Title, Text, Button, Link } from '../theme';
import { Wrapper, Container } from './styles';
import { LoginProps } from '../types';
import { getUrl, urlParams } from '../utils';


const Content:React.FC<LoginProps> = ({isUserLogged, setIsUserLogged}) => {

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') as string)
    if (data) setIsUserLogged(true)
  }, [isUserLogged]);

  return (
    <Wrapper>
      {isUserLogged ?
        <>
          <Title>Your subscription</Title>
          <Text>Plane and info about subscription (merchant info).
            Do you want transform your subscribe to NFT?
          </Text>
          <Container>
            <Link href={getUrl(urlParams)}>Transform to NFT</Link>
          </Container>
        </>
        : <>
        <Title>Content of merchant</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </>
      }
    </Wrapper>
  );
};

export default Content;