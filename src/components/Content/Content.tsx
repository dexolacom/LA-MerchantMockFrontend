import React, { useEffect, useState } from 'react';
import { Title, Text, Button } from '../theme';
import { Wrapper, Container } from './styles';
import { ethers } from "ethers";
import { LoginProps } from '../types';


const Content:React.FC<LoginProps> = ({isUserLogged, setIsUserLogged}) => {
  const [isUserHasSubscriptions, setIsUserHasSubscriptions] = useState(false)
  const [account, setAccount] = useState()

  // const [metamaskData, setMetamaskData] = useState({
  //   address: "",
  //   balance: null,
  // });


  const getConnection = () => {
    // @ts-ignore
    if (window.ethereum) {
      // @ts-ignore
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        // @ts-ignore
        // .then((res) => accountChangeHandler(res[0]));
        .then((res) => setAccount(res[0]));
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
      {isUserLogged ? (
        isUserHasSubscriptions
          ? <>
            <Title>Your subscription</Title>
            <Text>Plane and info about subscription (merchant info)
              Do you want transform your subscribe to NFT?
            </Text>
          </>
          : <Title>You have no current subscriptions</Title>
        ) : <>
        <Title>Content of merchant</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </>
      }
      <Container>
        <Text>Sign in with liquid access</Text>
        <Button onClick={getConnection}>Connect wallet</Button>
      </Container>
    </Wrapper>
  );
};

export default Content;