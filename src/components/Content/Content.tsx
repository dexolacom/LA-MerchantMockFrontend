import React, { useEffect, useState } from 'react';
import { Title, Text, Button } from '../theme';
import { Wrapper, Container } from './styles';
// import { ethers } from "ethers";
import { LoginProps } from '../types';
import { showFrame } from '../frame';


const Content:React.FC<LoginProps> = ({isUserLogged, setIsUserLogged}) => {
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false)
  const accountAddress = useState(JSON.parse(localStorage.getItem('account') as string))

  const getConnection = () => {
    // @ts-ignore
    if (window.ethereum) {
      // @ts-ignore
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        // @ts-ignore
        // .then((res) => accountChangeHandler(res[0]));
        .then((res) => {
          localStorage.setItem('accountAddress', JSON.stringify(res[0]))
          setIsMetamaskConnected(true)
          // setAccountAddress(res[0])
        });
    } else {
      alert("install metamask extension!");
    }
  };

  // const getbalance = (address) => {
  //
  //   // Requesting balance method
  //   window.ethereum
  //     .request({
  //       method: "eth_getBalance",
  //       params: [address, "latest"]
  //     })
  //     .then((balance) => {
  //       // Setting balance
  //       setdata({
  //         Balance: ethers.utils.formatEther(balance),
  //       });
  //     });
  // };

  // const accountChangeHandler = (account) => {
  //   setMetamaskData({
  //     address: account,
  //   });
  // };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData') as string)
    if (data) setIsUserLogged(true)
  }, [isUserLogged]);

  return (
    <Wrapper>
      {isUserLogged ?
        <>
          <Title>Your subscription</Title>
          <Text>Plane and info about subscription (merchant info).
            Do you want transform your subscribe to NFT?
          </Text>
          <Container>
            <Button onClick={() => showFrame()}>Transform to NFT</Button>
          </Container>
        </>
        : <>
        <Title>Content of merchant</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </>
      }
    </Wrapper>
  );
};

export default Content;