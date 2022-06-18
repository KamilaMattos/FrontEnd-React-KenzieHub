import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  --pink: #FF577F;
  --pink-focus: #FF427F;
  --pink-negative: #59323F;
  --gray0: #F8F9FA;
  --gray1: #868E96;
  --gray2: #343B41;
  --gray3: #212529;
  --gray4: #121214;
  --black: #000000;
  --white: #FFFFFF;
}
body{
  background-color: var(--gray4);
}

body, input, button{
  font-family: 'Inter';
  font-size: 1rem;
}
h1, h2, h3, h4, h5, h6{
  font-family: 'Inter';
  font-weight: 700;
}

button{
  cursor: pointer;
}
a{
  text-decoration: none;
}
`
