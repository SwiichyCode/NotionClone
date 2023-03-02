import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
button,
input,
textarea,
select {
    font-family: 'Inter', sans-serif;
}

ul {
    list-style: none;
}

h1 {
    font-size: 4.4rem;
    line-height: 5.2rem;
}
h2 {
    font-size: 3.4rem;
    line-height: 4.4rem;
}
p {
    font-size: 1.6rem;
    line-height: 2.4rem;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
:root {
    --color-purple: #635FC7;
    --color-purple-200: rgba(99, 95, 199, 0.25);
    --color-black: #000112;
    --color-black-400: #20212c;
    --color-back-200: rgba(0, 1, 18, 0.25);
    --color-white: #fff;
    --color-red: #ea5555;
    --color-green: #4BB543;
    --color-grey: #828fa3;
    --color-grey-200: #bfbfc3;
    --color-grey-300: #7a7c88;
    --color-border: rgba(130, 143, 163, 0.25);
    --color-gradient: -webkit-linear-gradient(#f6f6f7, #7e808f);
    
    --hover-red: #ff9898;
    --hover-purple: #a6a6ff;

    --fz-xxs: 1.2rem;
    --fz-md: 1.3rem;
    --fz-lg: 1.5rem;
    --fz-xl: 1.8rem;
    --fz-xxl: 2.4rem;
    --font-medium: 500;
    --font-bold: 700;
    --borderR-lg: 4px;
    --borderR: 6px;
    --borderR-md: 8px;
    --border-xl: 0px 10rem 10rem 0px;
    --header-h: 97px;
    --shadow-md: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    --current-transition: all 0.2s ease-in-out;
}
`;
