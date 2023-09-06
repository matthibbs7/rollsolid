import { workspaceState } from '@/atoms/workspaceAtom';
import { Flex, Box, Text, Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Input, ModalOverlay } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

type WorkspaceAddModalProps = {
    isOpen: boolean;
    handleClose: () => void;
};

const WorkspaceAddModal:React.FC<WorkspaceAddModalProps> = ({ isOpen, handleClose }) => {
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    
    const [companyName, setCompanyName] = useState(`Workspace ${workspaces.workspaces.length + 1}`);
    const [charsRemaining, setCharsRemaining] = useState(21);
    const [brandColor, setBrandColor] = useState('333333');
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 21) return;
        setCompanyName(event.target.value);
        setCharsRemaining(21 - event.target.value.length);
    };

    const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 6) return;
        setBrandColor(event.target.value);
    };

    const handleCreateCommunity = () => {
        setLoading(true);
        
        const newWorkspace = {id: uuid(), name: companyName, workspace_stack: { stack: []}};
        const newWorkspaces = [...workspaces.workspaces, newWorkspace];

        setWorkspaces((prevState) => ({
            ...prevState,
            workspaces: newWorkspaces,
        }));

        setCompanyName(`Workspace ${workspaces.workspaces.length + 2}`);
        setLoading(false);
        handleClose();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent bg='#181818' border='1px solid #2F2F2F' borderRadius='5px'>
                    <ModalHeader flexDir='column' display="flex" p={3} color='white' fontSize={15} fontWeight={600}><Flex align='center'><Text>Add New Workspace</Text></Flex></ModalHeader>
                    <Box pr={3} pl={3}> 
                        <Divider borderColor='#2f2f2f' />
                        <ModalCloseButton _focus={{boxShadow: 'none'}} />
                        <ModalBody flexDir="column" display="flex" p="10px 0px">
                            <Flex align='center' justify='center' w='55px' mt={1} mb={2} bg='#644ED5' borderRadius={10}><Text  fontSize='12.5px' fontWeight={500}>Name</Text></Flex>
                            <Text mb={-5} color='#A3A3A3' fontSize={11}>Workspace names cannot be changed</Text>
                            <Text pos='relative' top='28px' left='10px' w='20px' color='gray.400'>c/</Text>
                            <Input pos='relative' pl='12px' bg='#121212' border='none' borderRadius="0px" _active={{border: 'none'}} _focus={{border: 'none', boxShadow: 'none'}} _placeholder={{color: '#333333'}} onChange={handleChange} placeholder={`Workspace ${workspaces.workspaces.length + 1}`} size='sm' value={companyName}  />
                            <Text mt={1} color={charsRemaining === 0 ? 'red.300' : '#A3A3A3'} fontSize='11px'>{charsRemaining} Characters remaining</Text>
                            
                            <Flex align="center" direction="row">
                                <Flex align='center' justify='center' w='90px' mt={6} mb={2} bg='#644ED5' borderRadius={10}><Text  fontSize='12.5px' fontWeight={500}>Brand Color</Text></Flex>
                                <Flex w="20px" h="20px" mt={4} ml={2} style={{backgroundColor: `#${brandColor}`}}></Flex>
                            </Flex>
                            <Text mb={-5} color="#A3A3A3" fontSize={11}>Enter hex code (optional)</Text>
                            <Text pos='relative' zIndex={50} top='28px' left='10px' w='10px' color='#333333'>#</Text>
                            <Input pos="relative" pl='24px' color='#a3a3a3' bg='#121212' border='none' borderRadius="0px" _focus={{border: 'none', boxShadow: 'none'}} onChange={handleBrandChange} size='sm' value={brandColor}  />
                            {/* <BlockPicker /> */}
                            {/* <input
                                id='file-upload'
                                type='file'
                                accept='image/x-png,image/gif,image/jpeg'
                                hidden
                                ref={selectFileRef}
                                onChange={onSelectImage}
                            /> */}
                            
                            <Text pt={1} color='red' fontSize='9pt'>{error}</Text>
                        </ModalBody>
                    </Box>
                    <ModalFooter h='64px' mt={5} bg='#121212' borderBottomRadius="8px">
                        <Button w='146px' h='34px' px={4} py={0.5} fontSize='13.5px' fontWeight={500} bg='#0E0E0E' border='1px solid #242424' borderRadius='0' _hover={{bg: '#181818'}} isLoading={loading} onClick={handleCreateCommunity}>Create Workspace</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
export default WorkspaceAddModal;