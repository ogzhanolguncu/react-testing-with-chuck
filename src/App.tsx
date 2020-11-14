import { ChakraProvider, extendTheme } from '@chakra-ui/core';
import React from 'react';
import Home from './components/Home';

const fonts = {
  body: `Oswald,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Oswald,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const customTheme = extendTheme({ fonts });

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
