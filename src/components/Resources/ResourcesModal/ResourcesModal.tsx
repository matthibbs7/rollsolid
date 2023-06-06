import { Flex, Box, Text, Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
type ResourcesModalProps = {
    isOpen: boolean;
    handleClose: () => void;
};

const ResourcesModal:React.FC<ResourcesModalProps> = ({ isOpen, handleClose }) => {
    const [companyName, setCompanyName] = useState('');
    const [charsRemaining, setCharsRemaining] = useState(21);
    const selectFileRef = useRef<HTMLInputElement>(null);
    const [brandColor, setBrandColor] = useState('444444');
    const [brandRemaining, setBrandRemaining] = useState(6);
    
    const [companyLink, setCompanyLink] = useState('');
    
    const [error, setError] = useState('');
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
                        <ModalBody flexDir="column" display="flex" p="10px 0px">
                            <Flex align='center' justify='center' w='55px' mt={1} mb={2} bg='#644ED5' borderRadius={10}><Text  fontSize='12.5px' fontWeight={500}>Name</Text></Flex>
                            <Text mb={-5} color='#A3A3A3' fontSize={11}>Workspace names cannot be changed</Text>
                            <Text pos='relative' top='28px' left='10px' w='20px' color='gray.400'>c/</Text>
                            <Text mt={1} color={charsRemaining === 0 ? 'red' : '#A3A3A3'} fontSize='11px'>{charsRemaining} Characters remaining</Text>
                            
                            <Flex align="center" direction="row">
                                <Flex align='center' justify='center' w='90px' mt={6} mb={2} bg='#644ED5' borderRadius={10}><Text  fontSize='12.5px' fontWeight={500}>Brand Color</Text></Flex>
                                <Flex w="20px" h="20px" mt={4} ml={2} style={{backgroundColor: `#${brandColor}`}}></Flex>
                            </Flex>
                            <Text mb={-5} color="#A3A3A3" fontSize={11}>Enter hex code</Text>
                            <Text pos='relative' top='28px' left='10px' w='10px' color='gray.400'>#</Text>
                            
                            <Text pt={1} color='red' fontSize='9pt'>{error}</Text>
                        </ModalBody>
                    </Box>
                    <ModalFooter h='64px' mt={5} bg='#121212' borderBottomRadius="8px">
                        <Button w='146px' h='34px' px={4} py={0.5} fontSize='13.5px' fontWeight={500} bg='#0E0E0E' border='1px solid #242424' borderRadius='0' _hover={{bg: '#181818'}} isLoading={loading}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
export default ResourcesModal;