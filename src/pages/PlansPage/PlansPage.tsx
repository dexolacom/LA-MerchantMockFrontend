import React, { useEffect } from 'react';
import { Title } from '../../components/theme';
import { CardsContainer, Wrapper, CardsSection } from './styles';
import PlanCard from '../../components/PlanCard/PlanCard';
import { getUserPlans } from '../../requests';
import { useQuery } from 'react-query';


const PlansPage = () => {
  const { data: cardsInfo } = useQuery(
    'getPlans',
    () => getUserPlans(),
    {
      select: data => data.filter((obj: any) => {
        return obj?.package !== null || obj?.is_activated_NFT
      }),
    }
  )

  return (
    <Wrapper>
      <CardsSection>
        <Title fontSize='18px'>{cardsInfo?.length ? 'Your subscription plans' : "You haven't subscription plans"}</Title>
        <CardsContainer>
          {cardsInfo.map((card: any, index: React.Key) => (
            <PlanCard card={card} key={index}/>
          ))}
        </CardsContainer>
      </CardsSection>

    </Wrapper>
  );
};

export default PlansPage;