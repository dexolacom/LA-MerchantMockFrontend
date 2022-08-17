import React from 'react';
import { Content, Wrapper } from './styles';
import { PlanCardProps } from '../types';
import { Title, Text, FlexRow, Link } from '../theme';
import { getUrl } from '../utils';


const PlanCard:React.FC<PlanCardProps> = ({card}) => {
  const { NFT_id: nftId, package: packageName, expiration } = card

  return (
    <Wrapper>
      <Content>
        <FlexRow margin='0 0 8px 0'>
          <Title fontSize='16px' margin='0'>Subscription plan:</Title>
          <Text color='#ffe34c'>{packageName}</Text>
        </FlexRow>
        {nftId
          ? <>
            <FlexRow margin='0 0 8px 0'>
              <Title fontSize='16px' margin='0'>Status:</Title>
              <Text>activated</Text>
            </FlexRow>
            <FlexRow>
              <Title fontSize='16px' margin='0'>Term: </Title>
              <Text>2 months</Text>
            </FlexRow>
          </>
          :
          <>
            <FlexRow margin='0 0 8px 0'>
              <Title fontSize='16px' margin='0'>Status:</Title>
              <Text>not activated</Text>
            </FlexRow>
            <FlexRow>
              <Link href={getUrl()} target='_blank'>Transform to NFT</Link>
            </FlexRow>
          </>
        }
      </Content>
    </Wrapper>
  );
};

export default PlanCard;