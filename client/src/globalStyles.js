import { createGlobalStyle, css } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`${css`
  :root {
    //Colors
    --brightPurple: #ad1fea;
    --royalBlue: #4661e6;
    --darkNavyBlue: #353f68;
    --white: #ffffff;
    --offWhite: #f7f8fd;
    --lightGray: #f2f4ff;
    --lighterNavyBlue: #3a4374;
    --dullGray: #647196;
    --orange: #f49f85;
    --brightBlue: #62bcfa;
    --darkButtonColor: #373f68;

    /* Buttons */
    --hoverPurple: #c75af6;
    --hoverRoyalBlue: #7c91f9;
    --hoverNavyBlue: #656ea3;
    --brightRed: #d73737;
    --hoverRed: #e98888;
    --buttonTextColor: #f2f4fe;
    --paleBlue: #cfd7ff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jost", sans-serif;
  }

  #root {
    height: 100%;
  }
  html,
  body {
    height: 100%;
  }

  body {
    /* background-color: pink; */
    background-color: var(--lightGray);
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  input {
    padding: 0.9375rem 1rem 0.875rem;
  }

  input,
  textarea {
    background-color: var(--offWhite);
    border: none;
    border-radius: 5px;
    font-family: inherit;
    color: var(--lighterDarkBlue);

    &:focus {
      outline-style: solid;
      outline-color: var(--royalBlue);
      outline-width: thin;
    }
  }
`}

`;
