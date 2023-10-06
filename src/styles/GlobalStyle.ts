import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-brand-1:#0d47a1;

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
   
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-700);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px var(--light-purple);
  background-color: var(--light-gray)
  }

  ::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: var(--light-gray);
  }

  ::-webkit-scrollbar-thumb {
  background-color: var(--purple);
  border: 1px solid var(--light-purple);
  }
`;
