import { Text,Box, Flex, Center } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { getRecentItems } from '../../../redux/recent/recentSlice';

function RecentlyViewedProducts() {
  const dispatch = useDispatch();
  const {items,isLoading,error} = useSelector(store => store.recent);
  useEffect(() => {
    dispatch(getRecentItems());
  },[]);
  console.log(items);
  return (
    <Box>
      <Text mb={2} fontSize=".9rem">
        RECENTLY VIEWED PRODUCTS
      </Text>
      {error && (
        <Flex align="center" bg="white" h="300px" justify="center">
          <Center>
            <Text>Something went wrong</Text>
          </Center>
        </Flex>
      )}
      {items?.length === 0 && (
        <Flex align="center" bg="white" h="300px" justify="center">
          <Center>
            <Text>No Recent Items</Text>
          </Center>
        </Flex>
      )}
      <Flex bg="white">
        {items?.map(product => (
          <ProductCard {...product} />
        ))}
      </Flex>
    </Box>
  );
}

export default RecentlyViewedProducts;
