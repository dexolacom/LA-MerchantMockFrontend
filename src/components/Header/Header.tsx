import React, { useEffect, useState } from 'react';
import { Button, Title, Text } from '../theme';
import { Wrapper, Content, ButtonsContainer, TitleContainer, RouterNavLink } from './styles';
import Backdrop from '../Backdrop/Backdrop';
import { LoginModal } from '../Modals/Modals';
import { useAuthContext } from '../../contexts/AuthContext';


const Header:React.FC = () => {
  const {isAuth, setIsAuth} = useAuthContext()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [login, setLogin] = useState('')

  const deleteUserData = () => {
    localStorage.removeItem('localUserData')
    setIsAuth(false)
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('localUserData') as string)
    if (data) {
      setLogin(data?.login)
      setIsAuth(true)
    }
  }, [isAuth]);


  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <Title fontSize={'22px'} margin={0}>Awesome merchant 1</Title>
          <RouterNavLink to='/'>Purchase</RouterNavLink>
          <RouterNavLink to='/plans'>Your plans</RouterNavLink>
        </TitleContainer>

        {isAuth
          ? <ButtonsContainer>
            <Text>{login}</Text>
            <Button onClick={() => deleteUserData()}>Log out</Button>
          </ButtonsContainer>
          : <ButtonsContainer>
              <Button onClick={() => {
                setIsLoginModalOpen(true)
                setIsLogin(true)
              }}>
                Sing In
              </Button>
              <Button onClick={() => {
                setIsLoginModalOpen(true)
                setIsLogin(false)
              }}>
                Register
              </Button>
            </ButtonsContainer>
        }

        {isLoginModalOpen &&
          <Backdrop setIsModalOpen={setIsLoginModalOpen}>
            <LoginModal setIsModalOpen={setIsLoginModalOpen} isLogin={isLogin}/>
          </Backdrop>
        }

      </Content>
    </Wrapper>
  );
};

export default Header;