import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }

`

export const Input = styled.input`
  border-radius: 5px;
  padding: 4px 0.5em;
  border: 1px solid #dce1e6;
  outline: none;
  color: #2c3f57;

  ::-webkit-input-placeholder {
    color: #80a8c9;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 15px;
  }
  
`

export const RouterNavLink = styled(NavLink)`
  text-decoration: none;
  color: #dee2ee;
  font-weight: 600;

  &.active {
    color: #317ccc;
    text-decoration: underline;
  }
`