import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import './Product.css';
import Rating from '../../components/Rating';
import {FiBox} from 'react-icons/fi';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../redux/services/products';
function Product() {
    const {id} = useParams();
    const {data:product,error,isLoading} = useGetProductByIdQuery(id);
   
    const [sizeSelected,setSizeSelected] = useState(null);
    console.log(sizeSelected);

    if(isLoading){
      return <div>...Loading</div>
    }
  return (
    <Box m={2}>
      <Box className="product-details">
        <Grid
          templateColumns={'minmax(410px,2fr) minmax(573px,3fr)'}
          templateRows="699px"
        >
          <GridItem className="product-details-col1">
            <Image src={product.img} />
          </GridItem>
          <GridItem className="product-details-col2">
            <Box p="10px" borderBottom={'1px solid'} borderColor="gray.100">
              <Text color="black" fontSize={'1.3rem'}>
                {product.name}
              </Text>
              <HStack>
                <HStack align={'center'}>
                  <Rating />
                  <Text>( {product.rating.rate} )</Text>
                </HStack>
                <Text color="blue.500">{product.rating.ratings} Ratings </Text>
                <Text color="blue.500">{product.rating.reviews} Reviews</Text>
                <Text color="blue.500">{product.rating.selfies} Selfies</Text>
              </HStack>
            </Box>
            <Flex>
              <Box w="70%" mt={2}>
                <Text color="#aaa">
                  MRP{' '}
                  <Text as="span" textDecoration={'line-through'}>
                    Rs. {product.orig_price}
                  </Text>{' '}
                  ( Inclusive of all taxes )
                </Text>
                <HStack>
                  <Text color="red.600" fontSize="1.6rem">
                    Rs {product.price}
                  </Text>
                  <Text
                    border="1px solid gray"
                    p={'5px'}
                    lineHeight=".6rem"
                    fontSize=".7rem"
                  >
                    {product.disc_perc} % OFF
                  </Text>
                </HStack>
              </Box>
            </Flex>
            <Box mt={2} p={4} px={8} w="100%" bg="#fbfbfb" ml="-32px">
              <Flex>
                <Text w="100px">Color</Text>
                <Box>
                  <Image
                    h="100px"
                    border="2px solid"
                    borderColor="blue.400"
                    borderRadius={'4px'}
                    src={product.img}
                    p={2}
                  />
                  <Text textAlign={'center'}>{product.color}</Text>
                </Box>
              </Flex>
              <Flex>
                <Text w="100px">Size</Text>
                <Box>
                  <HStack spacing="16px">
                    {product.sizes.map(size => (
                      <Button variant={'outline'} size="sm" bg="whiteAlpha.800" onClick={() => setSizeSelected(size)} className={size === sizeSelected ? "selected-size":""}>
                        {size}
                      </Button>
                    ))}
                  </HStack>
                  <HStack mt="20px">
                    <Button
                      bg="#333333"
                      borderRadius={'2px'}
                      color="white"
                      fontWeight="light"
                      _hover={{
                        backgroundColor: '#4b4949',
                      }}
                    >
                      Add to cart
                    </Button>
                    <Button
                      bg="#e40046"
                      borderRadius={'2px'}
                      color="white"
                      fontWeight="light"
                      leftIcon={<FiBox />}
                      _hover={{
                        backgroundColor: '#d30241',
                      }}
                    >
                      Buy now
                    </Button>
                  </HStack>
                </Box>
              </Flex>
              <Flex mt="20px">
                <Text w="100px">Delivery</Text>
                <ul>
                  <li>Delivery in 7-9 days</li>
                  <li>Cash on Delivery also availiable for this location</li>
                </ul>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Product;
