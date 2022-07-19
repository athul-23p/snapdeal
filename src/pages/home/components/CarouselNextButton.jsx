import './CarouselButton.css';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {  Center } from '@chakra-ui/react';
function CarouselNextButton({handleClick}) {
  return <Center onClick={handleClick} borderRadius={'full'} className='carousel-btn next-btn'>
    <ChevronRightIcon />
  </Center>;
}

export default CarouselNextButton;
