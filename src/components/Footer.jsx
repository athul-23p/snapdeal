import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  Stack,
  HStack,
  Input,
  Button,
  Icon,
} from '@chakra-ui/react';

const features = [
  {
    heading: '100% SECURE PAYMENTS',
    t1: 'Moving your card details to a much more',
    t2: 'secured place',
  },
  {
    heading: 'TRUSTPAY',
    t1: '100% Payment Protection. Easy',
    t2: 'Return Policy',
  },
  {
    heading: 'HELP CENTER',
    t1: 'Got a question? Look no further',
    t2: 'Browse our FAQs or submit your query here.',
  },
  {
    heading: 'SHOP ON THE GO',
    t1: 'Download the app and get exciting',
    t2: 'app only offers at your fingertips',
  },
];

const footerLinks = [
  {
    title: 'POLICY INFO',
    links: [
      'Privacy Policy',
      'Terms of Sale',
      'Terms of Use',
      'Report Abuse & Taekwdown Policy',
      'FAQ',
    ],
  },
  {
    title: 'COMPANY',
    links: ['Impact@Snapdeal', 'Careers', 'Sitemap', 'Contact Us'],
  },
  {
    title: 'SNAPDEAL BUSINESS',
    links: ['Shopping App', 'Sell on Snapdeal', 'Media Enquiries'],
  },
  {
    title: 'POPULAR LINKS',
    links: [
      'Lehenga',
      'Headphones',
      "Kid's Clothing",
      'Sarees',
      'Shoes',
      'Winter Wear',
      'Shirt For Men',
    ],
  },
];
function Footer() {
  return (
    <Box>
      <Grid
        templateColumns={'repeat(4,1fr)'}
        px={'4%'}
        border="1px solid"
        borderColor={'gray.200'}
      >
        {features.map(item => (
          <FeatureItem {...item} />
        ))}
      </Grid>
      <Flex p={4} justify={'space-around'} pt={10}>
        {footerLinks.map(linkgroup => (
          <LinkStack linkgroup={linkgroup} />
        ))}
        <Box>
          <Heading fontSize={'.9rem'}>SUBSCRIBE</Heading>
          <HStack spacing="0px" mt={2}>
            <Input borderRadius={'none'} placeholder="Your email address" />
            <Button
              borderRadius={'none'}
              fontSize={'.7rem'}
              bg="black"
              color="white"
              fontWeight={100}
            >
              SUBSCRIBE
            </Button>
          </HStack>
          <Text mt={6} fontSize=".65rem">
            Register now to get updates on promotions and coupons
          </Text>
        </Box>
      </Flex>
      <Flex
        borderTop="1px solid"
        borderBottom="1px solid"
        fontSize=".9rem"
        p={4}
        gap={4}
      >
        <Stack>
          <Text>PAYMENT</Text>
          <HStack>{/* sprite */}</HStack>
        </Stack>
        <Stack>
          <Text>CONNECT</Text>
          <HStack>{/* sprite */}</HStack>
        </Stack>
      </Flex>
      <Box fontSize=".7rem" p={4} color='blackAlpha.800'>
        <Text>
          Online Shopping: Mens Footwear / Lehenga / Dresses / Womens Watches /
          Kurtis / Womens Footwear / Sarees / Casual Shoes / Mens Watches /
          Womens Casual Shoes / Frocks / Women Suits / Tops & Tunics / Gowns /
          Watches / Sports & Bicycles / Water Geysers / Men's Sportswear / Kids
          T-shirts / Kids Watches / Stationery Supplies / Baby Care Products /
          Copper Water Bottles Men's Clothing: Shirts / Casual Shirts / Full
          Sleeves Casual Shirts / Formal Shirts / Full Sleeves Formal Shirts /
          Regular Fit Formal Shirts / Cotton Shirts / T Shirts / Polo T shirts /
          V Neck T shirts / Henley T shirts / Printed T shirts / Round Neck T
          shirts / Hooded Sweatshirts / Jackets / Trousers & Chinos / Low Rise
          Jeans / Slim Jeans / Kurta Payjama Sets / Dhoti Kurta Sets Women's
          Clothing: Saree / Designer Saree / Cotton Sarees / Georgette Sarees /
          Chiffon Sarees / Net Sarees / Anarkali Suits / Kurtis / Leggings &
          Churidars / Embroidered Lehengas / Black Dresses / Jeggings / Jeans /
          A Line Skirts / Women's Gowns / Women's Dresses Mobiles Accessories:
          Mobile Covers / Leather Mobile Covers / Printed Back Covers / 10000mAh
          Power Banks / Ambrane Power Banks / Smart Watches / Fitness Bands /
          Tempered Glass Mobiles Screen Guards / Bluetooth Devices Watches: Mens
          Watches / Womens Watches TVs, Audio & Video: Speakers / Headphones /
          Earphones / Home Theatre Systems Home Furnishing: Bed Linen / Bed
          Sheets / Bath Linen / Mattresses / Curtains / Cushion Covers / Pillows
          / Carpets / Kids Bedding Computers & Peripherals: External Hard Disks
          / Pen Drives / Memory Cards Appliances: Fans / Mircowaves / Irons /
          Trimmers / Hair Dryers Toys & Games: Soft Toys / Dolls / Musical Toys
          / Kids Skate Scooters / Electronic Toys / Toddler Toys / Die Cast
          Vehicle / Ride Ons & Scooters Home & Kitchen: Home Decor / Paintings /
          Clocks / Flasks & Thermos / Photo Frames / Tupperware Kitchenware FMCG
          Offer - Top Brands: Accu-Chek Health Monitoring Devices / Nutraj -
          California Walnuts / Park Avenue / Gillette / KamaSutra Memory Cards:
          8 GB Memory Cards / 16 GB Memory Cards / 32 GB Memory Cards / 64 GB
          Memory Cards Books: Fiction / Non Fiction / Children & Young Adults /
          Competitive Exams / School Books / Academic Texts / Reference / Self
          Help
        </Text>
        <Text mt={4}>
          Snapdeal is India's leading pure-play value Ecommerce platform.
          Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the
          top four online lifestyle shopping destinations of India. Snapdeal
          brings together a wide assortment of good quality and value- priced
          merchandise on its platform. Snapdeal's vision is to enable the
          shoppers of Bharat to experience the joy of living their aspirations
          through reliable, value-for-money shopping. With a personalized,
          multilingual interface and cutting edge technology, Snapdeal has
          simplified the shopping experience for its value-conscious buyers by
          showcasing the most relevant products- products that are a good
          functional fit with their needs and of a quality that lasts- thereby
          delivering true value to its customers. With its commitment to high
          service standards, Snapdeal suppliers operate under a well structured
          ecosystem that enables them to offer great quality products at
          affordable prices. With majority of the value-seeking, middle-income,
          price-conscious buyers coming from the non-metros, Snapdeal’s
          logistics networks powered by third party logistics cover more than
          96% of India’s pin codes enabling order deliveries to more than 2500
          towns and cities and expanding. Further, Snapdeal's mission is to
          become India’s value lifestyle omni-channel leader. We are excited
          about continuing to build a complete ecosystem around value commerce,
          where we can serve Bharat consumers wherever they are on their offline
          to online shopping journey. Snapdeal is part of the AceVector Group
          and one of India’s best-known e-commerce companies with an exclusive
          focus on the value segment.
        </Text>
      </Box>
      <HStack justify="space-between" p={4} fontSize=".77rem" color="gray.600">
        <Text>Copyright © 2021, Snapdeal Limited. All Rights Reserved</Text>
        <Text _after={'\f17a'}>Made for Bharat </Text>
      </HStack>
    </Box>
  );
}

function FeatureItem({ heading, t1, t2 }) {
  return (
    <GridItem
      borderLeft="1px solid"
      borderRight="1px solid"
      borderColor={'gray.200'}
    >
      <Box className="feature-img" h="150px"></Box>
      <Box
        className="footer-grid-text"
        color="gray.600"
        p={4}
        textAlign="center"
      >
        <Heading fontSize="1.3rem">{heading}</Heading>
        <Text fontSize={'.8rem'} mt={2}>
          {t1}
        </Text>
        <Text fontSize={'.8rem'}>{t2}</Text>
      </Box>
    </GridItem>
  );
}

function LinkStack({ linkgroup }) {
  const { title, links } = linkgroup;
  return (
    <Stack>
      <Heading fontSize=".9rem">{title}</Heading>
      {links.map(link => (
        <Link color="gray.500" fontSize={'.75rem'}>
          {link}
        </Link>
      ))}
    </Stack>
  );
}
export default Footer;
