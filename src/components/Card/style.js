import styled from "styled-components"

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 4rem;
  border: none;
  border-radius: 5px;
  background-color: var(--gray4);
  padding: 1em;


  div{
    display: flex;
    width: 90%;
    justify-content: space-between;
  }

  h2 {
    color: var(--gray0);
    font-weight: 700;
    font-size: 14.21px;
  }
  span {
    color: var(--gray1);
    font-weight: 400;
    font-size: 12.182px;
    
  }

  button {
    width: 2.5rem;
    background-color: transparent;
    border: none;
    color: var(--gray1);
  }
`
