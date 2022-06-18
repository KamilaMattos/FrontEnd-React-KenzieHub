import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`

export const Content = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  h1 {
    color: #ff427f;
    font-size: 2.5rem;
  }
  span {
    color: #868e96;
    padding-top: 1rem;
    flex-wrap: wrap;
    font-size: 1.4rem;
  }
  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    button + button {
      margin-left: 1rem;
      font-size: 1rem;
      border: 1.2182px solid #59323f;
      border-radius: 4.06066px;
      background: #59323f;

      &:hover {
        background: #ff577f;
        transition: 0.5s;
      }
    }

    button {
      font-size: 1rem;
      border: 1.2182px solid #343b41;
      border-radius: 4.06066px;
      background: #343b41;

      &:hover {
        background: #868e96;
        transition: 0.5s;
      }
    }
  }
`
