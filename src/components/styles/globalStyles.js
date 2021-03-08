import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
p {
  margin: 0;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.6rem;
    color: #111;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .mainContainer {
    max-width: 114rem;
    margin: 0 auto;
  }
`