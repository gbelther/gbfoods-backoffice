import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
        @media (max-width: 1280px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
        color: ${({ theme }) => theme.colors.text};
    }

    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fontFamily.roboto};
        font-weight: 400;
    }

    body {
      background: ${({ theme }) => theme.colors.background_main}
    }

    button {
        cursor: pointer;
        transition: 0.3s;
        :hover {
          filter: brightness(0.8);
        }
    }
    
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
