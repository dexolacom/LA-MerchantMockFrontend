import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: #313F4BFF;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
  color: #fff;
`

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`

export const Input = styled.input`
  background-color: #556b81;
  border-radius: 5px;
  padding: 0 0.5em;
  border: none;
  outline: none;
  color: #fff;

  ::-webkit-input-placeholder {
    color: #80a8c9;
  }
`