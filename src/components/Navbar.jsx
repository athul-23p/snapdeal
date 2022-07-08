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
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [query, setQuery] = useState('');
  const width = '400';
  return (
    <Grid
      color="white"
      bg="#e40046"
      templateColumns={'auto auto auto auto'}
      gap={4}
      p={4}
    >
      <GridItem>
        <Image src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" />
      </GridItem>
      <GridItem>
        <HStack position="relative" spacing={'0'}>
          <Flex direction="column">
            <Input
              onFocus={e => setShowPopup(!showPopup)}
              onBlur={e => setShowPopup(false)}
              placeholder="Search products & brands"
              bg="white"
              w={width + 'px'}
              value={query}
              onChange={e => setQuery(e.target.value)}
              borderRadius="3"
              color="black"
            />
            {showPopup && (
              <Box
                bg="white"
                border="1px solid blue"
                h="300px"
                w={width + 'px'}
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
      </GridItem>
      <GridItem fontSize=".8rem">
        <Button
          as={Link}
          _hover={{ textDecoration: 'none', bg: 'transparent' }}
          bg="transparent"
          rightIcon={<FaUserCircle />}
        >
          Sign in
        </Button>
      </GridItem>
    </Grid>
  );
}

export default Navbar;
