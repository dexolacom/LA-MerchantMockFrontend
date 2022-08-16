import React, { useEffect, useState } from 'react';
import { Title } from '../../components/theme';
import { CardsContainer, Wrapper, CardsSection } from './styles';
import PlanCard from '../../components/PlanCard/PlanCard';
import { getUserPlans } from '../../requests';


const PlansPage = () => {
  const [cardsInfo, setCardsInfo] = useState([])

  useEffect(() => {
    getUserPlans().then(res => setCardsInfo(res))
  }, []);

  return (
    <Wrapper>
      {/*<CardsSection>*/}
      {/*  <Title fontSize='18px' margin='0 0 16px 0'>New nft subscription</Title>*/}
      {/*  <CardsContainer>*/}
      {/*    <PlanCard card={newCard}/>*/}
      {/*  </CardsContainer>*/}
      {/*</CardsSection>*/}
      <CardsSection>
        <Title fontSize='18px'>Your subscription plans</Title>
        <CardsContainer>
          {cardsInfo.map((card, index) => (
            <PlanCard card={card} key={index}/>
          ))}
        </CardsContainer>
      </CardsSection>

    </Wrapper>
  );
};

export default PlansPage;