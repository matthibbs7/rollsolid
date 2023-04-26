import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { GiRollingBomb } from 'react-icons/gi';
import Footer from '../Footer/Footer';

/* ------------------------
        authenticated? 
           / \
          /   \
         Yes   No
        /        \
render profile    TODO 404 or redirect home
------------------------- */

const ProfileView:React.FC = () => {
    return (
        <Flex direction="column" w="100%">
            <Flex justify="center" w="100%" h={['680px','680px','720px','720px']} px={4} py={4}>
                <Flex align="center" direction="column" w={['100%', '100%', '100%', '100%']} maxW="1228px" h="660px" mt={[0,0,2,2]} bg="#121212" border="1px solid black">
                    <Flex align="center" direction="row" mt={9}>
                        <Text fontFamily="AvenirNext-DemiBold" fontSize={['24pt', '24pt', '28pt', '28pt']} fontWeight={700}>Profile&nbsp;</Text>
                        <GiRollingBomb fontSize="28pt" />
                    </Flex>
                    <Text w={['90%', '90%', '65%', '65%']} mt={3} mb={1} color="#868686" fontFamily="AvenirNext-Regular" fontSize="13pt" lineHeight="19px" textAlign="center">Explore your Poker games and simulate your strategy through the power of data</Text>
                    <Flex direction="column" w={['90%', '90%', '65%', '65%']} mt={5} mr="auto" ml="auto">
                        
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    );
};
export default ProfileView;