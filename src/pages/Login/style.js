import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 5em;
  gap: 2em;

  h1 {
    color: var(--pink);
  }
`

export const Content = styled.div`
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #212529;

  form {
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    input {
      color: #f8f9fa;
      width: 50%;
    }

    h2 {
      color: #f8f9fa;
      font-weight: 700;
      font-size: 18px;
    }

    p {
      color: #868e96;
      font-weight: 600;
      font-size: 12px;
    }
    label {
      color: #666360;
      display: flex;
      justify-content: flex-start;
      padding-left: 10px;
      margin: 5px 0;
    }

    button {
      width: 95%;
      height: 48px;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;
      &:hover {
        background: #ff427f;
        transition: 0.5s;
      }
    }

    div {
      button {
        width: 15.5rem;
        background: #868e96;
        border: 1.2182px solid #868e96;
        border-radius: 4px;

        &:hover {
          background: #343b41;
          transition: 0.5s;
        }
      }
    }
  }
`
