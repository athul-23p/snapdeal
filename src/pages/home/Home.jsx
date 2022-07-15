import { Grid, GridItem, Text, Box } from '@chakra-ui/react';
import CategoryNavigationBar from './components/CategoryNavigation';
import MobileAppBanner from './components/MobileAppBanner';
import PromoCaraousel from './components/PromoCarousel';
import Caraousel from './components/PromoCarousel';
import RecentlyViewedProducts from './components/RecentlyViewedProducts';
import TrendingCaraousel from './components/TrendingCarousel';

function Home() {
  return (
    <Grid
      gap={'1rem'}
      templateAreas={`
            "catnav promo promo promo pincode"
            "catnav recent recent recent recent"
            "trend trend trend trend trend"
            "app app app app app"

        `}
      gridTemplateColumns={'200px repeat(3,220px) 220px'}
      gridTemplateRows={'repeat(3,300px) 400px'}
      w='fit-content'
      mx='auto'
      my={4}
    >
      <GridItem border='1px dotted' area={'catnav'}>
        <CategoryNavigationBar />
      </GridItem>
      <GridItem border='1px dotted' area="promo">
        <PromoCaraousel />
      </GridItem>
      <GridItem border='1px dotted' area="pincode">
        <Box>
          <Text>pin placeholder</Text>
        </Box>
      </GridItem>
      <GridItem  border='1px dotted'area="recent">
        <RecentlyViewedProducts />
      </GridItem>
      <GridItem border='1px dotted' area="trend">
        <TrendingCaraousel />
      </GridItem>
      <GridItem border='1px dotted' area="app">
        <MobileAppBanner />
      </GridItem>
      {/* <GridItem></GridItem> */}
      {/* <GridItem></GridItem> */}
    </Grid>
  );
}

export default Home;
