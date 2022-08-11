import React, { useState } from 'react';
import { Content, CrossIcon, Wrapper, Input } from "./styles"
import { ModalProps } from '../types';
import { Button, FlexRow } from '../theme';



export const LoginModal:React.FC<ModalProps> = ({ setIsModalOpen, isLogin }) => {
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const inputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, [event.target.name]: event.target.value})
  };

  return (
    <Wrapper onClick={e => e.stopPropagation()} background='#212c37'>
      <CrossIcon onClick={() => setIsModalOpen(false)}/>
      <Content>
        <FlexRow margin='0 0 16px 0'>
          <Input name='username' placeholder='login' onChange={inputHandler}/>
        </FlexRow>
         <FlexRow margin='0 0 16px 0'>
           <Input name='password' placeholder='password' onChange={inputHandler}/>
         </FlexRow>

        {isLogin
          ? <Button>Log in</Button>
          : <Button>Register</Button>
        }
      </Content>
    </Wrapper>
  )
}