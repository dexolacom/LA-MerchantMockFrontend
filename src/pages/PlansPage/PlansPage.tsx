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

  const filteredCards = cardsInfo.filter(obj => {
    // @ts-ignore
    return obj?.package !== null
  });

  return (
    <Wrapper>
      <CardsSection>
        <Title fontSize='18px'>{filteredCards.length ? 'Your subscription plans' : "You haven't subscription plans"}</Title>
        <CardsContainer>
          {filteredCards.map((card, index) => (
            <PlanCard card={card} key={index}/>
          ))}
        </CardsContainer>
      </CardsSection>

    </Wrapper>
  );
};

export default PlansPage;