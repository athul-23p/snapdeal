import './ProductCard.css';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';
function ProductCard({ img, price, original_price, rating, disc_perc, name }) {
  return (
    <VStack
      w="200px"
      p={2}
      _hover={{
        boxShadow: '0 7px 17px 0 rgba(23,84,116,0.18)',
      }}
      bg='white'
    >
      <Image h="200px" src={img} />
      <p className="product-name">{name}</p>
      <Rating />
      <HStack alignSelf={'start'} align={'center'}>
        <Text
          fontSize={'.78rem'}
          color="#cccccc"
          textDecoration={'line-through'}
        >
          Rs {original_price}
        </Text>
        <Text fontSize={'.78rem'} color="black">
          Rs {price}
        </Text>
        <Text
          fontSize={'.5rem'}
          h="fit-content"
          border="1px solid #cccccc"
          p={'2px'}
          pt={'4px'}
        >
          {disc_perc}% OFF
        </Text>
      </HStack>
    </VStack>
  );
}

function Rating() {
  return (
    <HStack spacing={'4px'} className="rating">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </HStack>
  );
}
export default ProductCard;
