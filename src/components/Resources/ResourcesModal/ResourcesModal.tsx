import { Flex, Image, Box, Text, Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useState } from 'react';
type ResourcesModalProps = {
    isOpen: boolean;
    handleClose: () => void;
};

const ResourcesModal:React.FC<ResourcesModalProps> = ({ isOpen, handleClose }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent w='44%' minW='44%' mt='120px' bg='#181818' border='1px solid #2F2F2F' borderRadius='8px'>
                    <ModalHeader flexDir='column' display="flex" p={3} color='white' fontSize={15} fontWeight={600}><Flex align='center'><Text>Resources</Text></Flex></ModalHeader>
                    <Box pr={3} pl={3}> 
                        <Divider borderColor='#2f2f2f' />
                        <ModalCloseButton _focus={{boxShadow: 'none'}} />
                        <ModalBody justifyContent='center' flexDir="column" display="flex" mb={5} p="10px 0px" pt={2} pb={10} px={5}>
                            <Text mt={2} mb={5} color='#acacac' fontSize='12px'>Additional resources to bring your Poker skills to the next level!</Text>
                            <Flex columnGap={4}>
                                <Flex direction='column' w='180px' h='140px' px={3.5} py={2} bg='#121212' border='1px solid #434343' borderRadius={5} _hover={{cursor: 'pointer', bg: '#181818'}}>
                                    <Text mb={3} fontSize='11.5px' fontWeight={600}>The Poker Bank</Text>
                                    <Image src='https://i.imgur.com/UDTFhxo.png' />
                                </Flex>
                                <Flex direction='column' w='180px' h='140px' px={3.5} py={2} bg='#121212' border='1px solid #434343' borderRadius={5} _hover={{cursor: 'pointer', bg: '#181818'}}>
                                    <Text mb={3} fontSize='11.5px' fontWeight={600}>Poker-AI Forums</Text>
                                    <Image src='https://i.imgur.com/vlrvvpu.png' />
                                </Flex>
                                <Flex direction='column' w='180px' h='140px' px={3.5} py={2} bg='#121212' border='1px solid #434343' borderRadius={5} _hover={{cursor: 'pointer', bg: '#181818'}}>
                                    <Text mb={3} fontSize='11.5px' fontWeight={600}>Poker AI Tutorial</Text>
                                    <Image src='https://i.imgur.com/fAXXE8g.png' />
                                </Flex>
                            </Flex>
                            <Flex columnGap={4} mt={4}>
                                <Flex direction='column' w='180px' h='140px' px={3.5} py={2} bg='#121212' border='1px solid #434343' borderRadius={5} _hover={{cursor: 'pointer', bg: '#181818'}}>
                                    <Text mb={3} fontSize='11.5px' fontWeight={600}>Two Plus Two Forums</Text>
                                    <Image src='https://i.imgur.com/JrUFbyU.png' />
                                </Flex>
                                <Flex w='180px' h='140px' bg='#232323'>

                                </Flex>
                                <Flex w='180px' h='140px' bg='#232323'>

                                </Flex>
                            </Flex>
                        </ModalBody>
                    </Box>
                    <ModalFooter h='64px' mt={5} bg='#121212' borderBottomRadius="8px">
                        <Button w='146px' h='34px' px={4} py={0.5} fontSize='13.5px' fontWeight={500} bg='#0E0E0E' border='1px solid #242424' borderRadius='0' _hover={{bg: '#181818'}} isLoading={loading} onClick={handleClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
export default ResourcesModal;