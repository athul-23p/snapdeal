import { Box, HStack, Image ,Text} from '@chakra-ui/react';
import './PromoCarousel.css';
import CarouselNextButton from './CarouselNextButton';
import CarouselPrevButton from './CarouselPrevButton';
import { useRef, useState } from 'react';

const items = [
  'https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg',
  'https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg',
  'https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpg',
  'https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg',
];

const btns = [
  'Health','Westenwear','Kurta Sets','Kitchen Need'
]
function PromoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const handleNext = () => {
    
    setActiveIndex((activeIndex+ 1)%4);
  }

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
      <Box className="carousel_container">
        <CarouselNextButton handleClick={handleNext} />
        <CarouselPrevButton handleClick={handlePrev} />
        <Box
          overflow={'hidden'}
          ref={ref}
          >
          <HStack
            
            spacing="0px"
            transform={`translateX(-${offset}px)`}
            className=""
          >
          {items.map(item => (
            <Image h="280px" objectFit="cover" src={item} />
          ))}

          </HStack>
        </Box>
        <HStack mt={3}>
          {btns.map((btn,index) => <Text w='150px' textAlign={'center'} className={activeIndex === index && "selected"}>{btn}</Text>)}
        </HStack>
      </Box>
    </Box>
  );
}

export default PromoCarousel;
