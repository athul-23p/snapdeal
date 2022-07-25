import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Flex,
  Link,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import Signin from './Signin';

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
 

  const [query, setQuery] = useState('');
  const searchElement = useRef(0);
  return (
    <Grid
      color="white"
      bg="#e40046"
      templateColumns={'200px 2fr 200px '}
      gap={4}
      alignItems='center'
      w='100%'
      p={3}
      
    >
      <GridItem ml={'30px'}>
        <Image src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" />
      </GridItem>
      <GridItem>
        <HStack position="relative" spacing={'0'}>
          <Flex direction="column" w='100%' minW='200px'>
            <Input
              onFocus={e => setShowPopup(!showPopup)}
              onBlur={e => setShowPopup(false)}
              placeholder="Search products & brands"
              bg="white"
              value={query}
              onChange={e => setQuery(e.target.value)}
              borderRadius="3"
              color="black"
              ref={searchElement}
            />
            {showPopup && (
              <Box
                bg="white"
                border="1px solid blue"
                h="300px"
                w={searchElement.current.clientWidth + 'px'}
                zIndex={4}
                position="absolute"
                top={12}
              ></Box>
            )}
          </Flex>
          <Button leftIcon={<AiOutlineSearch />} bg="black" borderRadius="3">
            Search
          </Button>
        </HStack>
      </GridItem>
      <GridItem fontSize=".8rem">
        <Button
          as={Link}
          _hover={{ textDecoration: 'none', bg: 'transparent' }}
          bg="transparent"
          rightIcon={<AiOutlineShoppingCart />}
        >
          Cart
        </Button>
      <Signin />
      </GridItem>
    
    </Grid>
  );
}

export default Navbar;
