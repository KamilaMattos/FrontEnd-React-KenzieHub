import styled from "styled-components"

export const StyledCardList = styled.div`
  background-color: var(--gray3);
  border-radius: 5px;
  max-height: 700px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 1rem;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & :hover {
    background-color: #343b41;
  }
`
