import React from 'react';
import Router from './routes/Router';
import { ThemeProvider } from 'styled-components'
import ligth from './styles/themes/themes'

function App() {
  return (
    <ThemeProvider theme={ligth}>
      <div>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
