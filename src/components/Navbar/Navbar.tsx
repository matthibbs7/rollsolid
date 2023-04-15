import { Box, Button, Flex, Switch, Text, useColorMode } from "@chakra-ui/react"
import { GiRollingBomb, GiPokerHand, GiAbstract089 } from 'react-icons/gi'
import { FaChartLine } from 'react-icons/fa'
import AuthButtons from "../Auth/AuthButtons"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/firebase/clientApp"
import { SiInformatica } from 'react-icons/si'
import { MdOutlineWidgets } from "react-icons/md"
import WidgetNavbar from "../Widget/WidgetNavbar/WidgetNavbar"

export const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter()
    const cmb = colorMode === 'light' ? '#121212' : 'white';
    const cmt = colorMode === 'light' ? '#F6F7F9' : '#2F343C';

    const [user, loading, error] = useAuthState(auth);

    return (
        <Flex
            height="45px"
            bgColor={cmb}
            width="100%"
            borderTop="1px solid #494D51"
            borderBottom="1px solid #494D51"
            align="center"
            px="15px"
            direction="row"
            zIndex="1111111"
            position="relative"
        >   
            <GiRollingBomb />
            <Text onClick={() => router.push('/')} _hover={{cursor: 'pointer'}} ml={2} fontWeight={700} color={cmt}>Rollsolid</Text>
            <Box ml={5} borderLeft="1px solid " w="1px" h="45%" />
            <Button onClick={() => router.push('/about')} border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} ml={7} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="11pt"><SiInformatica color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">About</Text></Button>
            {user && (
                <>
                    {/* <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} ml={0} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="13pt"><MdOutlineWidgets color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Widgets</Text></Button> */}
                    <WidgetNavbar />
                    <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} ml={0} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="12pt"><FaChartLine color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Charts</Text></Button>
                    <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} ml={0} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="11pt"><GiAbstract089 color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Simulate</Text></Button>
                    <Button border="1px solid #121212" _hover={{border: '1px solid #494D51'}} _active={{border: '1px solid #494D51'}} ml={0} bg={cmb} h="60%" borderRadius="0px" fontWeight={500} fontSize="15pt"><FaChartLine color="#D3D8DE" />&nbsp;&nbsp;<Text fontSize="11pt">Play</Text></Button>
                </>
            )}
            
            {/* <Button _hover={{backgroundColor: '#252A30'}} ml={7} bg={cmb} h="55%" borderRadius="3px" fontWeight={500}>Hands</Button> */}
            
            
            <AuthButtons user={user} />
            
            {/* <Button onClick={toggleColorMode} ml="auto" mr="5px" border="2px solid red" colorScheme="facebook">Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button> */}
            {/* <Switch /> */}
        </Flex>
    )
}