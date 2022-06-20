import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  header {
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    margin-bottom: 2rem;

    h1 {
      color: #ff577f;
    }

    button {
      margin-top: .5px;
      width: 79.54px;
      height: 31.95px;
      font-weight: 600;
      font-size: 12px;
      background: #212529;
      border-radius: 4px;
      border: none;
      color: #f8f9fa;
      &:hover {
        background: #343b41;
        transition: 0.5s;
      }
    }
  }

  @media (min-width: 1100px){



  }
  form {
    background: #212529;
   
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    padding: 1em;

    input {
      color: #f8f9fa;
    }

    h2 {
      color: #f8f9fa;
      font-weight: 700;
      font-size: 18px;
    }

    p {
      margin-top: 1rem;
      color: #868e96;
      font-weight: 400;
      font-size: 12px;
    }

    div {
      width: 100%;
      margin-top: 5px;

      label {
        color: #f8f9fa;
        font-weight: 400;
        font-size: 12.182px;
        display: flex;
        margin: 5px 0;
      }

      select {
        display: flex;
        padding: 1rem;
        margin-bottom: 1rem;
        color: #868e96;
        font-size: 16.2426px;
        background: #343b41;
        border: 1.2182px solid #343b41;
        border-radius: 4px;
        width: 100%;
      }
    }

    button {
      background: #59323f;
      border: 1.2182px solid #59323f;
      border-radius: 4px;
      width: 100%;
      height: 48px;
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;

      &:hover {
        background: #ff577f;
        transition: 0.5s;
      }
    }
  }
`
