import styled from 'styled-components';


export const Button = styled.div<{background?: string, padding?: string}>`
  background-color: ${({background}) => background ?? '#ff4343'};
  padding: ${({padding}) => padding ?? '4px 16px'};
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background-color: ${({background}) => background ?? '#de3838'};;
  }
`

export const Link = styled.a<{background?: string, padding?: string}>`
  text-decoration: none;
  background-color: ${({background}) => background ?? '#ff4343'};
  padding: ${({padding}) => padding ?? '6px 16px'};
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${({background}) => background ?? '#de3838'};;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #fff;
  margin-bottom: 16px;
`

export const Text = styled.p`
  color: #fff;
  font-size: 16px;
  margin-bottom: 16px;
`