import styled, { css } from "styled-components"

export const Container = styled.div`
  text-align: left;
  width: 100%;
  div {
    color: #f8f9fa;
    font-weight: 400;
    font-size: 12.182px;
    span {
      color: var(--pink);
    }
  }
`

export const InputContainer = styled.div`
  background: #343b41;
  color: #666360;
  border: 1.2182px solid #343b41;
  border-radius: 4px;
  display: flex;
  padding: 1rem;
  width: 100%;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--pink);
    `}
  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: none;

    &::placeholder {
      color: #868e96;
      font-weight: 400;
      font-size: 16.2426px;
    }

    &:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #343b41 inset;
      -webkit-text-fill-color: #f8f9fa;
    }
  }
`
