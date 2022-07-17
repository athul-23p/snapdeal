import { Box, HStack, Image, Text } from '@chakra-ui/react';
import styled from 'styled-components';

const Wrapper = styled.div`
  

    & > .app-image {
    
    width: 50%;
    height: 100%;
  }
`;

function MobileAppBanner() {
  return (
    <Wrapper>
      <HStack
        p={2}
        sx={{
          background: 'url(https://i2.sdlcdn.com/img/leaves1x.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          backgroundSize: '185px',
          height: '500px',
        }}
      >
        <Box
          className="app-image"
          sx={{
            height: '500px',
            width: '50%',
            backgroundImage:
              'url(https://i2.sdlcdn.com/img/appScreenshot@1x.png)',
            backgroundRepeat: 'no-repeat',
          }}
        ></Box>
        <Box w='400px' mr={4}>
          <Box>
            <Text color='black' className="line1" fontWeight='600' fontSize="2.3rem">
              Download Snapdeal App Now
            </Text>
            <Text className="line2">Fast, Simple & Delightful</Text>
            <Text className="line3">
              All it takes is 30 seconds to Download
            </Text>
          </Box>
          <HStack my={4}>
            <Box
              sx={{
                background:
                  'url(https://i2.sdlcdn.com/img/newHomePageIcons@1x.png)',
                backgroundPosition: '0px -153px',
                width: '130px',
                height: '41px',
              }}
            ></Box>
            <Box
              sx={{
                background:
                  'url(https://i2.sdlcdn.com/img/newHomePageIcons@1x.png)',
                backgroundPosition: '0px -196px',
                width: '130px',
                height: '41px',
              }}
            ></Box>
          </HStack>
        </Box>
      </HStack>
    </Wrapper>
  );
}

export default MobileAppBanner;
