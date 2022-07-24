
import { StarIcon } from '@chakra-ui/icons';
import { HStack } from '@chakra-ui/react';
function Rating() {
  return (
    <HStack spacing={'4px'} className="rating" mt='3px'>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </HStack>
  );
}

export default Rating;
