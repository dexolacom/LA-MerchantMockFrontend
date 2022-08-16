import React, { useEffect, useState } from 'react';
import { Title } from '../../components/theme';
import { CardsContainer, Wrapper, CardsSection } from './styles';
import PlanCard from '../../components/PlanCard/PlanCard';
import { getUserPlans } from '../../requests';
import Loader from '../../components/Loader/Loader';


const PlansPage = () => {
  const [cardsInfo, setCardsInfo] = useState([])

  useEffect(() => {
    getUserPlans().then(res => setCardsInfo(res))
  }, []);

  const filteredByPackage = cardsInfo.filter(obj => {
    // @ts-ignore
    return obj?.package !== null;
  });

  return (
    <Wrapper>
      <CardsSection>
        <Title fontSize='18px'>{filteredByPackage.length ? 'Your subscription plans' : 'You havent subscription plans'}</Title>
        <CardsContainer>
          {filteredByPackage.map((card, index) => (
            <PlanCard card={card} key={index}/>
          ))}
        </CardsContainer>
      </CardsSection>

    </Wrapper>
  );
};

export default PlansPage;