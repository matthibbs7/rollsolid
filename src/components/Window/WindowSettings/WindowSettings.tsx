import React from 'react';
import { WindowState } from '@/types/windows';
import { useRecoilState } from 'recoil';
import { windowsState } from '@/atoms/windowsAtom';
import { Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Flex, Checkbox, Input, Box } from '@chakra-ui/react';

interface WindowSettingsProps {
    currentWindow: WindowState;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const WindowSettings = ({ currentWindow, isOpen, onOpen, onClose }: WindowSettingsProps) => {
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);
    
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent p={4} bg='#171717' border='1px solid #2B2B2B' borderRadius='0px'>
                    {/* <Box w='100%' h='20px' bg='black'>
                        
                    </Box> */}
                    <ModalHeader p='2px' px={1.5} color='#C7AE7A' fontSize='10.5pt' fontWeight={700} bg='#171717' border='1px solid grey'>WINDOW SETTINGS</ModalHeader>
                    <ModalBody mt={4} p={0}>
                        <Flex w='100%' p={0.5} px={1.5} border='1px solid grey'>
                            <Text color='white' fontFamily='AvenirNext-Regular' fontSize='11pt'>Type {currentWindow.type}</Text>
                            <Checkbox ml='auto' fontSize='11pt' borderColor='grey' borderRadius='0px'colorScheme='facebook' />
                        </Flex>
                        <Flex align='center' w='100%' p={0.5} px={1.5} border='1px solid grey'>
                            <Text color='white' fontFamily='AvenirNext-Regular' fontSize='11pt'>Widget name</Text>
                            <Input w='30%' h='18px' ml='auto' borderRadius='0' _placeholder={{marginLeft: '0', padding: '0', color: '#7083b3'}} placeholder='Notes' />
                        </Flex>
                        <Flex w='100%' p={0.5} px={1.5} border='1px solid grey'>
                            <Text color='white' fontFamily='AvenirNext-Regular' fontSize='11pt'>Lock resize</Text>
                            <Checkbox ml='auto' fontSize='11pt' borderColor='grey' borderRadius='0px'colorScheme='facebook' />
                        </Flex>
                        <Flex w='100%' p={0.5} px={1.5} border='1px solid grey'>
                            <Text color='white' fontFamily='AvenirNext-Regular' fontSize='11pt'>Label color</Text>
                            <Flex align='center' ml='auto'>
                                <Text color='#b6b6b6'>#121212</Text>
                                <Box w='14px' h='14px' bg='red.300'>

                                </Box>
                                
                            </Flex>
                        </Flex>
                        
                    </ModalBody>

                    <ModalFooter mt={-2} mb={-7} pl={0}>
                        <Text mr='auto' color='#7083b3' fontFamily='AvenirNext-DemiBold' fontSize='11pt'>Learn more about the settings <Text as='span' color='gray.400' textDecoration='underline'>here</Text></Text>
                        <Button mr={-9} color='#7083b3' fontFamily='AvenirNext-DemiBold' fontSize='11pt' _hover={{bg: 'none'}} onClick={onClose} variant='ghost'>Exit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};