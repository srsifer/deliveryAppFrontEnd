import React, { useState } from 'react';
import Router from './routes/Router';
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import GlobalStyle from './styles/global';
import { useSelector } from 'react-redux';

function App() {


  const theme = useSelector(({ themeSelectReducer }) => (
    themeSelectReducer.themeTitle
  ));

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <div>
      <GlobalStyle/>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
