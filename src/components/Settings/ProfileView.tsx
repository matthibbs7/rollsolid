import React from 'react';
import { Text, Flex, Divider, Switch } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import { IdenticonImg } from '../Navbar/IdenticonImage.tsx/IdenticonImage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';

/* ------------------------
        authenticated? 
           / \
          /   \
         Yes   No
        /        \
render profile    TODO 404 or redirect home
------------------------- */

const ProfileView:React.FC = () => {
    const [user] = useAuthState(auth);

    const emailRegex = /.+?(?=@)/;
    
    return (
        <Flex direction="column" w="100%">
            <Flex justify="center" w="100%" h={['680px','680px','720px','720px']} px={4} py={4}>
                <Flex direction="column" w={['100%', '100%', '100%', '100%']} maxW="1228px" h="660px" mt={[0,0,2,2]} px={10} bg="#121212" border="1px solid #494D51">
                    <Flex direction="row" mt={9} mr='auto' mb={5}>
                        <Text fontFamily="AvenirNext-DemiBold" fontSize={['24pt', '24pt', '28pt', '28pt']} fontWeight={700}>Profile&nbsp;</Text>
                    </Flex>
                    <Flex align='center'>
                        {user?.email &&
                        <Flex align='center' justify='center' w='62px' h='62px' mr={4} p={1} pb={1} bg='none' border='1px solid grey' borderRadius='34px'>
                            <IdenticonImg username={user.email.match(emailRegex)?.toString() ?? ''}  saturation='50' lightness='50' height="59px" width="59px" />
                        </Flex> 
                        }
                        <Text mt={5} fontFamily='AvenirNext-DemiBold' fontSize='14.5pt'>@{user?.email?.match(emailRegex)?.toString() ?? ''}</Text>
                    </Flex>
                    <Flex>
                        <Flex direction='column' mt={5}>
                            <Text color='#7083B3' fontFamily='AvenirNext-DemiBold' fontSize='13.5pt'>Subscriptions</Text>
                            <Divider borderColor='#7083B3' />
                        </Flex> 
                    </Flex>
                    <Flex direction='column' w='33%'>
                        <Flex direction='column' w='110px' mt={5} mb={3}>
                            <Text color='#7083B3' fontFamily='AvenirNext-DemiBold' fontSize='13.5pt'>Site Settings</Text>
                            <Divider borderColor='#7083B3' />
                        </Flex> 
                        <Flex align='center'>
                            <Flex direction='column'>
                                <Text>Notifications</Text>
                                <Text color='#868686'>Adjust toast popups for dashboards</Text>
                            </Flex>
                            <Switch ml='auto' />
                        </Flex>
                        <Flex align='center'>
                            <Flex direction='column'>
                                <Text>Language</Text>
                                <Text color='#868686'>Feature description languages</Text>
                                
                            </Flex>
                            <Switch ml='auto' />
                        </Flex>
                        <Flex align='center'>
                            <Flex direction='column'>
                                <Text>Color Theme</Text>
                                <Text color='#868686'>Toggle Dark Mode (default)</Text>
                                
                            </Flex>
                            <Switch ml='auto' />
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