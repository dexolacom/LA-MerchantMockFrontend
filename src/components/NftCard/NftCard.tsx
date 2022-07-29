import React from 'react';
import { Content, Wrapper } from './styles';
import { NftCardProps } from '../types';
import { Title, Text, FlexRow } from '../theme';


const NftCard:React.FC<NftCardProps> = ({card}) => {
  const { id, type } = card

  return (
    <Wrapper>
      <Content>
        <FlexRow margin='0 0 16px 0'>
          <Title margin='0' fontSize='16px'>Id:</Title>
          <Text>{id}</Text>
        </FlexRow>
        <FlexRow>
          <Title margin='0' fontSize='16px'>Type:</Title>
          <Text color='#ffe34c'>{type}</Text>
        </FlexRow>
      </Content>
    </Wrapper>
  );
};

export default NftCard;