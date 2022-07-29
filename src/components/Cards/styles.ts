import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`