import './CarouselButton.css';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import {  Center } from '@chakra-ui/react';

function CarouselPrevButton({handleClick}) {
    return (
      <Center onClick={handleClick}  className="carousel-btn prev-btn" borderRadius={'full'}
      >
        <ChevronLeftIcon />
      </Center>
    );
}

export default CarouselPrevButton;
