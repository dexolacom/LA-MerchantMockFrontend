import React, { useEffect, useState } from 'react';
import { Button } from '../theme';
import { Wrapper, Content, InputsContainer, Input } from './styles';


const Header = () => {
  const [isUserInput, setIsUserInput] = useState(true)
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
      setIsUserInput(prevState => !prevState)
    }
  };

  const deleteUserData = () => {
    localStorage.removeItem('userData')
    setIsUserInput(prevState => !prevState)
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') as string)
    setUserName(data?.username)
  }, [isUserInput]);

  return (
    <Wrapper>
      <Content>
        <span>Merchant</span>
        {userName
          ?
          <InputsContainer>
            <span>{userName}</span>
            <Button onClick={deleteUserData}>Logout</Button>
          </InputsContainer>
          :
          <InputsContainer>
            <Input name='username' placeholder='login' onChange={inputHandler}/>
            <Input name='password' placeholder='password' onChange={inputHandler}/>
            <Button onClick={saveUserData}>Sign In</Button>
          </InputsContainer>
        }
      </Content>
    </Wrapper>
  );
};

export default Header;