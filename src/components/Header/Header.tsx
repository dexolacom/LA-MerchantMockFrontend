import React, { useState } from 'react';
import { Button, Title } from '../theme';
import { Wrapper, Content, ButtonsContainer, TitleContainer } from './styles';
import { LoginProps } from '../types';
import Backdrop from '../Backdrop/Backdrop';
import { LoginModal } from '../Modals/Modals';


const Header:React.FC<LoginProps> = ({isUserLogged, setIsUserLogged}) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  // const [userName, setUserName] = useState('')
  // const [userData, setUserData] = useState({
  //   username: '',
  //   password: ''
  // })
  //
  // const inputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
  //   setUserData({...userData, [event.target.name]: event.target.value})
  // };

  // const saveUserData = () => {
  //   if (userData) {
  //     localStorage.setItem('userData', JSON.stringify(userData))
  //     setIsUserLogged(true)
  //   }
  // };
  //
  // const deleteUserData = () => {
  //   localStorage.removeItem('userData')
  //   setIsUserLogged(false)
  // };
  //
  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('userData') as string)
  //   if (data) {
  //     setUserName(data?.username)
  //     setIsUserLogged(true)
  //   }
  // }, [isUserLogged]);


  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <Title fontSize={'22px'} margin={0}>Awesome merchant 1</Title>
          {/*<RouterNavLink to='/'>Purchase</RouterNavLink>*/}
          {/*<RouterNavLink to='/nfts'>Nfts</RouterNavLink>*/}
        </TitleContainer>

        {/*{isUserLogged*/}
        {/*  ? <InputsContainer>*/}
        {/*    <span>{userName}</span>*/}
        {/*    <Button onClick={deleteUserData}>Logout</Button>*/}
        {/*  </InputsContainer>*/}
        {/*  : <InputsContainer>*/}
        {/*     <Input name='username' placeholder='login' onChange={inputHandler}/>*/}
        {/*     <Input name='password' placeholder='password' onChange={inputHandler}/>*/}
        {/*     <Button onClick={saveUserData}>Sign In</Button>*/}
        {/*   </InputsContainer>*/}
        {/*}*/}

        <ButtonsContainer>
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