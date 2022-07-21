import { Text, Box, HStack } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import CarouselNextButton from './CarouselNextButton';
import CarouselPrevButton from './CarouselPrevButton';
const data = {
  img: 'https://n1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg',
  rating: {
    rate: 3.9,
    ratings: 19191,
    reviews: 236,
  },
  price: 130,
  original_price: 1499,
  disc_perc: 91,
  name: 'Bhawna Collection Loard Shiv Trishul Damru Locket With Puchmukhi Rudraksha Mala Gold-plated Brass, Wood For Men & Women',
};
function TrendingCaraousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % 4);
  };

  const handlePrev = () => {
    if (activeIndex - 1 < 0) {
      setActiveIndex(3);
    } else {
      setActiveIndex((activeIndex - 1) % 4);
    }
  };
  const offset = ref.current ? activeIndex * ref.current.clientWidth : 0;

  return (
    <Box>
      <Text p={2} fontSize='.9rem'>TRENDING PRODUCTS</Text>
      <Box bg="white" position={'relative'} overflow="hidden">
        <CarouselNextButton handleClick={handleNext} />
        <CarouselPrevButton handleClick={handlePrev} />
        <HStack spacing={'0px'} transform={`translateX(-${offset}px)`}>
          <ProductCard {...data} />
        </HStack>
      </Box>
    </Box>
  );
}

export default TrendingCaraousel;
