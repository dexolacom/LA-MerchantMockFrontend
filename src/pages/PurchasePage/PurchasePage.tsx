import React, { useEffect, useState } from 'react';
import { Title, Text, Link } from '../../components/theme'
import { Wrapper, LinkContainer } from './styles';
import { getUrl } from '../../components/utils';
import Cards from '../../components/Cards/Cards';
import { useAuthContext } from '../../contexts/AuthContext';


const PurchasePage:React.FC = () => {
  const {isAuth, setIsAuth} = useAuthContext()
  const [isSubPurchased, setIsSubPurchased] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('localUserData') as string);
    if (data) setIsAuth(true);
  }, [isAuth]);

  return (
    <Wrapper>
      {isSubPurchased
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
      }
    </Wrapper>
  );
};

export default PurchasePage;