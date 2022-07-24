import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  HStack,
  Flex,
  Grid,
  extendTheme,
  
} from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import AllRoutes from './routes/AllRoutes';
import './App.css';
const theme = extendTheme({
  styles: {
    global: {
      "body": {
        color: "#666",
        fontSize:".82rem"
      },
      "*": {
        boxSizing:'border-box'
      },
    }
  }
})
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        p={1}
        justify="space-between"
        bg="#c6003d"
        color="white"
        fontSize=".8rem"
      >
        <Box>Brand Waali Quality. Bazaar Waali Deal!</Box>
        <HStack>
          <a href="">Impact@Snapdeal</a>
          <a href="">Gift Cards</a>
          <a href="">Help Center</a>
          <a href="">Sell on Snapdeal</a>
          <a href="">Download App</a>
        </HStack>
      </Flex>
      <Navbar />
      <AllRoutes />
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
