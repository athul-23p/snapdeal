import {
  Grid,
  GridItem,
  Text,
  Box,
  Input,
  HStack,
  Button,
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
    isLoading,
  } = useGetTrendingProductsQuery();
  console.log(trendingProducts);
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
        gridTemplateRows={'repeat(2,320px) 400px 465px'}
        w="fit-content"
        mx="auto"
        my={4}
      >
        <GridItem border="1px dotted" area={'catnav'}>
          <CategoryNavigationBar />
        </GridItem>
        <GridItem border="1px dotted" area="promo" bg="white">
          <PromoCarousel />
        </GridItem>
        <GridItem border="1px dotted" area="pincode" bg="white">
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
        <GridItem border="1px dotted" area="recent">
          <RecentlyViewedProducts />
        </GridItem>
        <GridItem border="1px dotted" area="trend">
          <TrendingCaraousel products={trendingProducts} />
        </GridItem>
        <GridItem border="1px dotted" area="app" bg="white">
          <MobileAppBanner />
        </GridItem>
      </Grid>
    </Wrapper>
  );
}

export default Home;
