import React, { useEffect } from 'react';
import { Title, Text, Link } from '../../components/theme'
import { Wrapper, LinkContainer } from './styles';
import { getUrl } from '../../components/utils';
import Cards from '../../components/Cards/Cards';
import { useAuthContext } from '../../contexts/AuthContext';


const PurchasePage:React.FC = () => {
  const {isAuth, setIsAuth} = useAuthContext()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('localUserData') as string);
    if (data) setIsAuth(true);
  }, [isAuth]);

  return (
    <Wrapper>
      <LinkContainer>
        <Link href={getUrl('activate')} target='_blank'>Activate/Deactivate subscription with LA</Link>
      </LinkContainer>
      <Title margin={0} fontSize='22px'>Choose your plan</Title>
      {/*@ts-ignore*/}
      <Cards/>
    </Wrapper>
  );
};

export default PurchasePage;