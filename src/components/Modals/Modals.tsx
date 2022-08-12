import React, { useState } from 'react';
import { Content, CrossIcon, Wrapper, Input } from "./styles"
import { ModalProps } from '../types';
import { Button, FlexRow } from '../theme';
import { addNewUser, authUser } from '../../requests';
import { useAuthContext } from '../../contexts/AuthContext';


export const LoginModal:React.FC<ModalProps> = ({ setIsModalOpen, isLogin }) => {
  const { setIsAuth } = useAuthContext()
  const [userData, setUserData] = useState({
    login: '',
    password: ''
  })

  const inputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, [event.target.name]: event.target.value})
  };

  const registerUser = () => {
    addNewUser(userData, setIsModalOpen)
  };

  const loginUser = () => {
    authUser(userData, setIsModalOpen, setIsAuth)
  }

  return (
    <Wrapper onClick={e => e.stopPropagation()} background='#212c37'>
      <CrossIcon onClick={() => setIsModalOpen(false)}/>
      <Content>
        <FlexRow margin='0 0 16px 0'>
          <Input name='login' placeholder='login' onChange={inputHandler}/>
        </FlexRow>
         <FlexRow margin='0 0 16px 0'>
           <Input name='password' placeholder='password' onChange={inputHandler}/>
         </FlexRow>

        {isLogin
          ? <Button onClick={() => loginUser()}>Log in</Button>
          : <Button onClick={() => registerUser()}>Register</Button>
        }
      </Content>
    </Wrapper>
  )
}