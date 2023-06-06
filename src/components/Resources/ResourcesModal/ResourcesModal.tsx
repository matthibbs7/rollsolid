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
                        <ModalBody justifyContent='center' flexDir="column" display="flex" p="10px 0px" px={10} py={5}>
                            <Flex columnGap={8}>
                                <Flex w='180px' h='120px' bg='#232323'>

                                </Flex>
                                <Flex w='180px' h='120px' bg='#232323'>

                                </Flex>
                                <Flex w='180px' h='120px' bg='#232323'>

                                </Flex>
                            </Flex>
                            <Flex columnGap={8} mt={6}>
                                <Flex w='180px' h='120px' bg='#232323'>

                                </Flex>
                                <Flex w='180px' h='120px' bg='#232323'>

                                </Flex>
                                <Flex w='180px' h='120px' bg='#232323'>

                                </Flex>
                            </Flex>
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