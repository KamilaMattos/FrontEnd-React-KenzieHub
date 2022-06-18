import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  height: 6rem;
  width: 70%;

  h1 {
    color: var(--pink);
    font-size: 1.5rem;
  }

  button {
    background-color: var(--gray3);
    font-size: 1rem;
    width: 55.49px;
    height: 32px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    &:hover {
      background: #343b41;
    }
  }
`
export const InfoUser = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: var(--gray0);
    font-weight: 700;
    font-size: 18px;
  }

  p {
    color: var(--gray1);
    font-weight: 400;
    font-size: 12px;
  }
`

export const HeaderList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 3rem;

  h3 {
    color: var(--gray0);
    font-weight: 600;
    font-size: 16px;
  }

  button {
    background: #212529;
    border-radius: 4px;
    width: 35px;
    border: none;
    &:hover {
      background: #343b41;
      border-radius: 4px;
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
