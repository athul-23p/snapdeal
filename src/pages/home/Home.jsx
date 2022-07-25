import {
  Grid,
  GridItem,
  Text,
  Box,
  Input,
  HStack,
  Button,
  Center,
} from '@chakra-ui/react';
import CategoryNavigationBar from './components/CategoryNavigation';
import MobileAppBanner from './components/MobileAppBanner';
import PromoCarousel from './components/PromoCarousel';

import RecentlyViewedProducts from './components/RecentlyViewedProducts';
import TrendingCaraousel from './components/TrendingCarousel';
import styled from 'styled-components';
import { useGetTrendingProductsQuery } from '../../redux/services/trending';
const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
  .pincode-container {
    padding: 5px;
    & * {
      font-size: 0.65rem;
    }

    .pin-input {
      border-radius: 0px;
      padding: 0.5rem;
      margin: 15px 0px;
      height: 35px;
    }
    .location-img {
      background-position: -10px 5px;
    }
  }
`;
function Home() {
  const {
    data: trendingProducts,
    error,
    isError,
    isLoading,
  } = useGetTrendingProductsQuery();


  if(isError){
    console.log(error);
    return <Center h='100vh'>
      <Text>Something Went Wrong</Text>
    </Center>
  }
  // console.log(trendingProducts);
  return (
    <Wrapper>
      <Grid
        gap={'1rem'}
        templateAreas={`
            "catnav promo promo promo pincode"
            "catnav recent recent recent recent"
            "trend trend trend trend trend"
            "app app app app app"

        `}
        gridTemplateColumns={'200px repeat(3,240px) 220px'}
        gridTemplateRows={'repeat(2,320px) 340px 465px'}
        w="fit-content"
        mx="auto"
        my={4}
      >
        <GridItem  area={'catnav'}>
          <CategoryNavigationBar />
        </GridItem>
        <GridItem  area="promo" bg="white">
          <PromoCarousel />
        </GridItem>
        <GridItem  area="pincode" bg="white">
          <Box textAlign={'center'} className="pincode-container">
            <Box
              className="location-img"
              background={'url(https://i2.sdlcdn.com/img/artboardNext.png)'}
              h="120px"
              w="120px"
              mx="auto"
              backgroundRepeat={'no-repeat'}
              my={2}
            ></Box>
            <p my={4}>Your Delivery Pincode</p>
            <p>
              Enter your pincode to check availiabilty and faster delivery
              options
            </p>
            <Input placeholder="Enter pincode" className="pin-input" />
            <HStack>
              <Button
                h="34px"
                borderRadius="3px"
                bg="blackAlpha.800"
                color="white"
                fontWeight="light"
                w="140px"
                textTransform={'uppercase'}
                _hover={{ backgroundColor: 'blackAlpha.700' }}
              >
                Submit
              </Button>
              <Button
                h="34px"
                borderRadius="3px"
                textTransform={'uppercase'}
                disabled={true}
              >
                Next
              </Button>
            </HStack>
          </Box>
        </GridItem>
        <GridItem  area="recent">
          {/* <RecentlyViewedProducts /> */}
        </GridItem>
        <GridItem  area="trend">
          <TrendingCaraousel products={trendingProducts} />
        </GridItem>
        <GridItem  area="app" bg="white">
          <MobileAppBanner />
        </GridItem>
      </Grid>
    </Wrapper>
  );
}

export default Home;
