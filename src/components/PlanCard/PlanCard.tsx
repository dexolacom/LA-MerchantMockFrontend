import React from 'react';
import { Content, Wrapper } from './styles';
import { PlanCardProps } from '../types';
import { Title, Text, FlexRow, Link } from '../theme';
import { getUrl } from '../utils';


const PlanCard:React.FC<PlanCardProps> = ({card}) => {
  const { NFT_id: NftId, package: packageName, expiration, is_activated_NFT: isActive } = card

  // let expirationMonth = Math.floor((expiration % 31536000) / 2628000);

  return (
    <Wrapper>
      <Content>
        <FlexRow margin='0 0 8px 0'>
          <Title fontSize='16px' margin='0'>Subscription plan:</Title>
          <Text color='#ffe34c'>{packageName}</Text>
        </FlexRow>
        {NftId
          ? <>
            <FlexRow margin='0 0 8px 0'>
              <Title fontSize='16px' margin='0'>Status:</Title>
              <Text>{isActive ? 'activated' : 'not activated'}</Text>
            </FlexRow>
            <FlexRow>
              <Title fontSize='16px' margin='0'>Term: </Title>
              <Text>2 months</Text>
            </FlexRow>
          </>
          : <FlexRow>
            <Link href={getUrl()} target='_blank'>Transform to NFT</Link>
          </FlexRow>
        }

      </Content>
    </Wrapper>
  );
};

export default PlanCard;