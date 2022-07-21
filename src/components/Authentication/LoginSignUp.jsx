import { Button, Center, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

function LoginSignUp({ModelCloseButton}){
    const [userCredential,setUserCredential] = useState("");
    const handleLogin = () => {

    }
    return (
      <VStack position={'absolute'} w="50%" top="-20px" left="48%" borderRadius={'8px'} h='400px' bg='white' boxShadow={'md'} p={4} className='auth-loginsignup'>
        <Flex w='80%'>
        <Text fontSize={'1.1rem'} textAlign='left '>Login/Sign Up on Snapdeal</Text>
    
        </Flex>
        <Text w='80%' mb={2}>
          Please provide your Mobile Number or Email to Login/ Sign Up on
          Snapdeal
        </Text>
        <Input placeholder="Mobile Number/Email" w="80%" name='userCredential' onChange={(e) => setUserCredential(e.target.value)} value={userCredential}/>
        <Button mt={8}  className="auth-btn auth-btn-continue">
          continue
        </Button>
      </VStack>
    );
}

export default LoginSignUp;