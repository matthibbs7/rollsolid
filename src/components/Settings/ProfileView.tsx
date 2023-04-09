import React, { useEffect, useState } from 'react';
import { Button, Text, Flex, useColorMode, Input, Box, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { HiFingerPrint } from 'react-icons/hi';
import { GiRollingBomb } from 'react-icons/gi';
import { MdAlternateEmail } from 'react-icons/md';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/errors';
import Footer from '../Footer/Footer';

const ProfileView:React.FC = () => {
    // const [authenticated, setAuthenticated]
    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#282828' : 'white';
    
    return (
        <Flex flexDirection="column" width="100%">
            <Flex justifyContent="center" width="100%" height={["680px","680px","720px","720px"]} px={4} py={4}>
                <Flex bg="#121212" border="1px solid black" flexDir="column" mt={[0,0,2,2]} width={['100%', '100%', '100%', '100%']} maxWidth="1228px" height="660px" align="center">
                    <Flex align="center" mt={9} direction="row">
                        <Text fontSize={["24pt", "24pt", "28pt", "28pt"]} fontWeight={700} fontFamily="AvenirNext-DemiBold">Profile&nbsp;</Text>
                        
                        {/* <1Text fontSize="28pt" fontWeight={700} fontFamily="AvenirNext-DemiBold">&nbsp;Rollsolid</Text> */}
                        <GiRollingBomb fontSize="28pt" />
                    </Flex>
                    <Text lineHeight="19px" width={["90%", "90%", "65%", "65%"]} textAlign="center" mt={3} mb={1} fontSize="13pt" fontFamily="AvenirNext-Regular" color="#868686">Explore your Poker games and simulate your strategy through the power of data</Text>
                    <Flex mt={5} ml="auto" mr="auto" width={["90%", "90%", "65%", "65%"]} direction="column">
                        
                    </Flex>
                    {/* <Flex align="center" flexDirection="row" mt={6} borderTop="1px solid black" bg="#353535" width="100%" h="36px">
                        <Box ml={3}>
                            <BsQuestionSquare />
                        </Box>
                        <Text ml={3} fontSize="10pt" fontFamily='AvenirNext-Regular'>Learn more about Rollsolid <Text textDecoration="underline" fontFamily='AvenirNext-DemiBold' as="span">here</Text></Text>
                    </Flex> */}
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )
}
export default ProfileView;