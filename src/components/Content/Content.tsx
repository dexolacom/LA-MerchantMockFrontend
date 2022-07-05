import React, { useEffect, useState } from 'react';
import { Title, Text } from '../theme';
import { Wrapper } from './styles';


const Content = ({isUserLogged, setIsUserLogged}:{isUserLogged: boolean, setIsUserLogged: (b: boolean) => void}) => {
  const [isUserHasSubscriptions, setIsUserHasSubscriptions] = useState(false)
  // const [isUserLogged, setIsUserLogged] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') as string)
    if (data) setIsUserLogged(true)
  }, [isUserLogged]);

  return (
    <Wrapper>
      {isUserLogged ? (
        isUserHasSubscriptions
          ? <>
            <Title>Your subscription</Title>
            <Text>Plane and info about subscription (merchant info)
              Do you want transform your subscribe to NFT?
            </Text>
          </>
          : <Title>You have no current subscriptions</Title>
        ) : <>
        <Title>Content of merchant</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Text>
      </>
      }


    </Wrapper>
  );
};

export default Content;