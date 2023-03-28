import { Box, Button, Flex, Switch, Text, useColorMode } from "@chakra-ui/react"
import { GiRollingBomb, GiPokerHand } from 'react-icons/gi'
import { FaChartLine } from 'react-icons/fa'
import AuthButtons from "../Auth/AuthButtons"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/firebase/clientApp"

export const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#121212' : 'white';
    const cmt = colorMode === 'light' ? '#F6F7F9' : '#2F343C';

    const [user, loading, error] = useAuthState(auth);

    return (
        <Flex
            height="55px"
            bgColor={cmb}
            width="100%"
            borderBottom="1px solid black"
            align="center"
            px="15px"
            direction="row"
        >   
            <GiRollingBomb />
            <Text onClick={() => router.push('/')} _hover={{cursor: 'pointer'}} ml={2} fontWeight={700} color={cmt}>Rollsolid</Text>
            <Box ml={5} borderLeft="1px solid " w="1px" h="45%" />
            <Button _hover={{backgroundColor: '#1f1f1f'}} ml={7} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="15pt"><GiPokerHand color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Hands</Text></Button>
            {/* <Button _hover={{backgroundColor: '#252A30'}} ml={7} bg={cmb} h="55%" borderRadius="3px" fontWeight={500}>Hands</Button> */}
            <Button _hover={{backgroundColor: '#1f1f1f'}} ml={0} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="15pt"><FaChartLine color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Charts</Text></Button>
            
            <AuthButtons user={user} />
            
            {/* <Button onClick={toggleColorMode} ml="auto" mr="5px" border="2px solid red" colorScheme="facebook">Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button> */}
            {/* <Switch /> */}
        </Flex>
    )
}