import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => (props.pinkSchema ? "#868E96" : "#FF577F")};
  color: #ffffff;
  height: 45px;
  width: 100%;
  font-size: 1.5rem;
  border-radius: 10px;
  
`;