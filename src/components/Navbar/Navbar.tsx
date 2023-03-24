import { Button, Flex, Switch, Text, useColorMode } from "@chakra-ui/react"

export const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const cmb = colorMode === 'light' ? '#1c2127' : 'white';
    const cmt = colorMode === 'light' ? '#F6F7F9' : '#2F343C';

    return (
        <Flex
            height="55px"
            bgColor={cmb}
            width="100%"
            border="1px solid #494D51"
            align="center"
            px="15px"
            direction="row"
            borderRadius="3px"

        >
            <Text fontWeight="bold" color={cmt}>Rollsolid</Text>
            {/* <Button onClick={toggleColorMode} ml="auto" mr="5px" border="2px solid red" colorScheme="facebook">Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button> */}
            {/* <Switch /> */}
        </Flex>
    )
}