import React from 'react';
import ReactGA from "react-ga";

import styled, { ThemeProvider, injectGlobal } from "styled-components";
import WebFont from "webfontloader";
import theme from "./theme/theme";

// https://github.com/react-ga/react-ga
ReactGA.initialize('UA-000000-00', { debug: true });

/* eslint-disable */
injectGlobal`
  html {
    background: #1B998B;
    color: #fff;
    height: 100%;
    margin: 0;
    min-height: 100%;
    overflow: hidden;
    padding: 0;
  }

  ::selection {
    background: #ffefd5;
    color: #404040;
  }
`;
/* eslint-enable */

WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif']
  }
});

const AppWrapper = styled.section`
  font-family: 'Droid Sans', sans-serif;
`;

const App = () => (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <header>
          <h1>React App Skeleton</h1>
        </header>
        <hr />
        <p>Includes:</p>
        <ul>
          <li>Create-react-app</li>
          <li>Styled-components</li>
          <li>Jest/Enzyme</li>
          <li>Storybook</li>
          <li>WebFontLoader</li>
          <li>GA</li>
          <li>CRA service woker</li>
          <li>Airbnb eslint</li>
          <li>Jenkins build scripts</li>
        </ul>
      </AppWrapper>
    </ThemeProvider>
);

export default App;
