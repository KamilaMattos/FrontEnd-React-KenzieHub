import styled from "styled-components"

export const RegisterTech = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.75);

`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  min-width: 300px;

`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--gray2);
  width: 100%;
  height: 3rem;

  h2 {
    font-weight: 700;
    font-size: 14px;
    color: var(--gray0);
    padding-left: 1rem;
  }
  button {
    background-color: var(--gray2);
    border: none;
    padding-right: 1rem;
    margin-top: 5px;
  }
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--gray3);
  width: 100%;
  padding: 1rem;
  
 
  input{
    color: #f8f9fa;
  }

  label {
    color: #f8f9fa;
    font-weight: 400;
    font-size: 12.182px;
    display: flex;
    justify-content: flex-start;
    margin-top: 1em;
  }
  select {
    border-radius: 4px;
    display: flex;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    background: #343b41;
    color: #f8f9fa;
  }
  button {
    font-size: 1rem;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
  }
`
