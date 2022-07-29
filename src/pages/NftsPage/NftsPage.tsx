import React from 'react';
import { Title } from '../../components/theme';
import { CardsContainer, Wrapper, CardsSection } from './styles';
import NftCard from '../../components/NftCard/NftCard';

const cardsInfo = [
  {
    type: 'Basic',
    id: 222
  },
  {
    type: 'Premium',
    id: 322
  },
]

const newCard = {
  type: 'Basic',
  id: 344
}


const NftsPage = () => {
  return (
    <Wrapper>
      <CardsSection>
        <Title fontSize='18px' margin='0 0 16px 0'>New nft subscription</Title>
        <CardsContainer>
          <NftCard card={newCard}/>
        </CardsContainer>
      </CardsSection>
      <CardsSection>
        <Title fontSize='18px'>Existed nft subscriptions</Title>
        <CardsContainer>
          {cardsInfo.map((card, index) => (
            <NftCard card={card} key={index}/>
          ))}
        </CardsContainer>
      </CardsSection>

    </Wrapper>
  );
};

export default NftsPage;