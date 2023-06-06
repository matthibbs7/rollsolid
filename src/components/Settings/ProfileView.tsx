import React, { useEffect } from 'react';
import { Text, Flex, Switch } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import { IdenticonImg } from '../Navbar/IdenticonImage.tsx/IdenticonImage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

/* ------------------------
        authenticated? 
           / \
          /   \
         Yes   No
        /        \
render profile    TODO 404 or redirect home
------------------------- */

const ProfileView:React.FC = () => {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    const emailRegex = /.+?(?=@)/;

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user]);

    if (loading) {
        return (
            <Text>Loading</Text>
        );
    } else if (error) {
        return (
            <Text>Error occurred</Text>
        );
    } else if (!user) {
        return (
            <Text
                color='red.300'
                fontSize="16pt"
            >
                Not logged in
            </Text>
        );
    }

    return (
        <Flex direction="column" w="100%">
            <Flex justify="center" w="100%" h={['680px','680px','720px','720px']} px={4} py={4}>
                <Flex direction="column" w={['100%', '100%', '100%', '100%']} maxW="1228px" h="660px" mt={[0,0,2,2]} px={10} bg="#121212" border="1px solid #494D51">
                    <Flex direction="row" mt={9} mr='auto' mb={5}>
                        <Text fontFamily="AvenirNext-DemiBold" fontSize={['24pt', '24pt', '28pt', '28pt']} fontWeight={700}>Profile&nbsp;</Text>
                    </Flex>
                    <Flex direction='column' w='110px' mt={-1} mb={3}>
                        <Text color='#F8D585' fontSize='13px' fontWeight={400}>Account</Text>
                        {/* <Divider borderColor='#7083B3' /> */}
                    </Flex> 
                    <Flex align='center' mt={2}>
                        {user?.email &&
                        <Flex align='center' justify='center' w='62px' h='62px' mr={4} p={1} pb={1} bg='none' border='1px solid grey' borderRadius='34px'>
                            <IdenticonImg username={user.email.match(emailRegex)?.toString() ?? ''}  saturation='50' lightness='50' height="59px" width="59px" />
                        </Flex> 
                        }
                        <Text mt={6} fontFamily='AvenirNext-DemiBold' fontSize='14.5pt'>@{user?.email?.match(emailRegex)?.toString() ?? ''}</Text>
                    </Flex>
                    <Flex direction='column' h="35px" mt={4} ml={-1} px={1} onClick={() => signOut(auth)}>
                        <Text fontSize='13px' fontWeight={400}>Email</Text>
                        <Text color='#868686'>{user?.email}</Text>
                    </Flex>
                    <Flex direction='column' w='33%'>
                        <Flex justify='center' direction='column' h='28px' mt={7} borderRadius={5}>
                            <Text color='#F8D585' fontSize='13px' fontWeight={400}>Subscriptions</Text>
                            {/* <Divider borderColor='#7083B3' /> */}
                        </Flex> 
                        <Flex align='center'>
                            <Flex direction='column'>
                                <Text color='white' fontSize='13px' fontWeight={400}>Active</Text>
                                <Text color='#868686'>Expires April 2023</Text>
                            </Flex>
                            {/* <Switch ml='auto' /> */}
                        </Flex>
                    </Flex>
                    <Flex direction='column' w='33%'>
                        <Flex direction='column' w='110px' mt={8} mb={3}>
                            <Text color='#F8D585' fontSize='13px' fontWeight={400}>Site Settings</Text>
                            {/* <Divider borderColor='#7083B3' /> */}
                        </Flex> 
                        <Flex align='center'>
                            <Flex direction='column'>
                                <Text fontSize='13px' fontWeight={400}>Notifications</Text>
                                <Text color='#868686' fontSize='13px' fontWeight={400} >Adjust toast popups for dashboards</Text>
                            </Flex>
                            <Switch ml='auto' variant='boxy' />
                        </Flex>
                        <Flex align='center'>
                            <Flex direction='column'>
                                <Text fontSize='13px' fontWeight={400}>Language</Text>
                                <Text color='#868686' fontSize='13px' fontWeight={400}>Feature description languages</Text>
                                
                            </Flex>
                            <Switch ml='auto' variant='boxy' />
                        </Flex>
                        <Flex align='center'>
                            <Flex direction='column'>
                                <Text fontSize='13px' fontWeight={400}>Color Theme</Text>
                                <Text color='#868686' fontSize='13px' fontWeight={400}>Toggle Dark Mode (default)</Text>
                                
                            </Flex>
                            <Switch ml='auto' variant='boxy' />
                        </Flex>
                    </Flex>
                    {/* <Text w={['90%', '90%', '65%', '65%']} mt={3} mb={1} color="#868686" fontFamily="AvenirNext-Regular" fontSize="13pt" lineHeight="19px" textAlign="center">Explore your Poker games and simulate your strategy through the power of data</Text> */}
                    <Flex direction="column" w={['90%', '90%', '65%', '65%']} mt={5} mr="auto" ml="auto">
                        
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    );
};
export default ProfileView;