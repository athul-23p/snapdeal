import { HStack, Image, Link, VStack, Box, Text } from '@chakra-ui/react';

const topCategories = [
  {
    text: "Men's Fashion",
    link: '',
    img: 'https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png',
  },
  {
    text: "Womens's Fashion",
    link: '',
    img: 'https://i2.sdlcdn.com/img/leftnavicon09/30x30home_living2.png',
  },
  {
    text: 'Home & Kitchen',
    link: '',
    img: 'https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg',
  },
  {
    text: "Toys, Kids' Fashion & more",
    link: '',
    img: 'https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg',
  },
  {
    text: 'Beauty, Health & Daily Needs',
    link: '',
    img: 'https://i1.sdlcdn.com/img/leftnavicon09/fashion30x30_3.png',
  },
];

const moreCategories = [
  { text: 'Automotives', link: '' },
  { text: 'Mobile & Accessories', link: '' },
  { text: 'Electronics', link: '' },
  { text: 'Sports, Fitness & Outdoor', link: '' },
  { text: 'Computers & Gaming', link: '' },
  { text: 'Books, Media & Music', link: '' },
  { text: 'Hobbies', link: '' },
];
function CategoryNavigationBar() {
  return (
    <VStack p={4} fontSize=".75rem">
      <Box>
        <Text my={2}>TOP CATEGORIES</Text>
        {topCategories?.map(cat => (
          <HStack spacing={'.7rem'}>
            <Image borderRadius={'full'} h="25px" w="25px" src={cat.img} />
            <Link
              textOverflow={'ellipsis'}
              w="123px"
              whiteSpace="nowrap"
              display={'inline-block'}
              overflow="hidden"
            >
              {cat.text}
            </Link>
          </HStack>
        ))}
      </Box>
      <Box>
        <Text my={2}>MORE CATEGORIES</Text>
        <VStack align="start">
          {moreCategories?.map(cat => (
            <Link>{cat.text}</Link>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
}

export default CategoryNavigationBar;
