import React, { useEffect, useState } from 'react';
import { Button } from '../theme';
import { Wrapper, Content, InputsContainer, Input } from './styles';
import { LoginProps } from '../types';


const Header:React.FC<LoginProps> = ({isUserLogged, setIsUserLogged}) => {
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const inputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, [event.target.name]: event.target.value})
  };

  const saveUserData = () => {
    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData))
      setIsUserLogged(true)
    }
  };

  const deleteUserData = () => {
    localStorage.removeItem('userData')
    setIsUserLogged(false)
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') as string)
    setUserName(data?.username)
  }, [isUserLogged]);


  return (
    <Wrapper>
      <Content>
        <span>Merchant</span>
        {isUserLogged
          ? <InputsContainer>
            <span>{userName}</span>
            <Button onClick={deleteUserData}>Logout</Button>
          </InputsContainer>
          : <InputsContainer>
             <Input name='username' placeholder='login' onChange={inputHandler}/>
             <Input name='password' placeholder='password' onChange={inputHandler}/>
             <Button onClick={saveUserData}>Sign In</Button>
           </InputsContainer>
        }

        {/*{userName*/}
        {/*  ?*/}
        {/*  <InputsContainer>*/}
        {/*    <span>{userName}</span>*/}
        {/*    <Button onClick={deleteUserData}>Logout</Button>*/}
        {/*  </InputsContainer>*/}
        {/*  :*/}
        {/*  <InputsContainer>*/}
        {/*    <Input name='username' placeholder='login' onChange={inputHandler}/>*/}
        {/*    <Input name='password' placeholder='password' onChange={inputHandler}/>*/}
        {/*    <Button onClick={saveUserData}>Sign In</Button>*/}
        {/*  </InputsContainer>*/}
        {/*}*/}
      </Content>
    </Wrapper>
  );
};

export default Header;