import React, { useEffect, useState } from 'react';
import { Title, Text, Link } from '../../components/theme'
import { Wrapper, LinkContainer } from './styles';
import { LoginProps } from '../../components/types';
import { getUrl } from '../../components/utils';
import Cards from '../../components/Cards/Cards';


const PurchasePage:React.FC<LoginProps> = ({ isUserLogged, setIsUserLogged }) => {
  const [isSubPurchased, setIsSubPurchased] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') as string);
    if (data) setIsUserLogged(true);
  }, [isUserLogged]);

  return (
    <Wrapper>
      {isUserLogged ?
        isSubPurchased
          ? <>
            <Text margin='0 0 16px 0'>Subscription successfully purchased</Text>
            <Link href={getUrl()} target='_blank'>Transform to NFT</Link>
          </>
          : <>
            <LinkContainer>
              <Link href={getUrl('activate')} target='_blank'>Activate subscription with LA</Link>
            </LinkContainer>
            <Title margin={0} fontSize='22px'>Choose your plan</Title>
            {/*@ts-ignore*/}
            <Cards setIsSubPurchased={setIsSubPurchased}/>
          </>
        : <>
          <Title>Connect to our merchant</Title>
          <Text>
            To see the subscription plans you must be logged in, enter your username and password and click Sing In
            button
          </Text>
        </>
      }
    </Wrapper>
  );
};

export default PurchasePage;