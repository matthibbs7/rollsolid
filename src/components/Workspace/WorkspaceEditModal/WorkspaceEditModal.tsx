import { workspaceState } from '@/atoms/workspaceAtom';
import { Flex, Box, Text, Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';

type WorkspaceEditModalProps = {
    isOpen: boolean;
    handleClose: () => void;
};

const WorkspaceEditModal:React.FC<WorkspaceEditModalProps> = ({ isOpen, handleClose }) => {
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    
    const [companyName, setCompanyName] = useState(`Workspace ${workspaces.workspaces.length + 1}`);
    const [charsRemaining, setCharsRemaining] = useState(21);
    const [brandColor, setBrandColor] = useState('333333');
    const [activeId, setActiveId] = useState(workspaces.active.id);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setActiveId(workspaces.active.id);
    }, [workspaces.active.id]);

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

    const deleteWorkspace = (selectedId: string) => {
        if (workspaces.workspaces.length === 1) {
            return;
        }
        
        const currentActiveWorkspaceID = workspaces.active.id;
        const newWorkspacesArray = [...workspaces.workspaces];
        
        const indexOfItemInArray = workspaces.workspaces.findIndex(w => w.id === currentActiveWorkspaceID);
        
        if (indexOfItemInArray < workspaces.workspaces.length - 1) {
            // then we can set activeId to existing index selected
            newWorkspacesArray.splice(indexOfItemInArray, 1);
        
            // 1,2,3,4
            setWorkspaces((prevState) => ({
                ...prevState,
                workspaces: newWorkspacesArray,
            }));
            
            const newActiveStack = workspaces.workspaces[indexOfItemInArray+1];
            const newActiveId = workspaces.workspaces[indexOfItemInArray+1].id;
            
            setWorkspaces((prevState) => ({
                ...prevState,
                active: newActiveStack,
            }));
    
            setActiveId(newActiveId);
            return;
        }
        newWorkspacesArray.splice(indexOfItemInArray, 1);
        
        // 1,2,3,4
        setWorkspaces((prevState) => ({
            ...prevState,
            workspaces: newWorkspacesArray,
        }));

        const newActiveStack = workspaces.workspaces[indexOfItemInArray-1];
        const newActiveId = workspaces.workspaces[indexOfItemInArray-1].id;
        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActiveStack,
        }));

        setActiveId(newActiveId);
        return;
    };

    const transferWorkspace = (selectedId: string) => {
        // update current active id in workspaces
        if (selectedId === activeId) {
            return;
        }

        const currentActiveWorkspaceID = workspaces.active.id;

        const indexOfItemInArray = workspaces.workspaces.findIndex(w => w.id === currentActiveWorkspaceID);
        
        const newWorkspacesArray = [...workspaces.workspaces];
        newWorkspacesArray[indexOfItemInArray] = workspaces.active;
        
        setWorkspaces((prevState) => ({
            ...prevState,
            workspaces: newWorkspacesArray,
        }));

        // copy selected workspace into active
        const indexOfSelectedWorkspaces = workspaces.workspaces.findIndex(w => w.id === selectedId);
        const newActiveStack = workspaces.workspaces[indexOfSelectedWorkspaces];

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActiveStack,
        }));

        setActiveId(selectedId);
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose}>
                {/* <ModalOverlay /> */}
                <ModalContent bg='#181818' border='1px solid #2F2F2F' borderRadius='8px'>
                    <ModalHeader flexDir='column' display="flex" p={3} color='white' fontSize={15} fontWeight={600}><Flex align='center'><Text>Edit your Workspaces</Text></Flex></ModalHeader>
                    <Box pr={3} pl={3}> 
                        <Divider borderColor='#2f2f2f' />
                        <ModalCloseButton _focus={{boxShadow: 'none'}} />
                        <ModalBody flexDir="column" display="flex" p="10px 0px">
                            <Flex align='center' justify='center' w='185px' mt={2.5} mb={2} bg='#644ED4' borderRadius={10}><Text  fontSize='12.5px' fontWeight={500}>Select a Workspace below</Text></Flex>
                            <Flex direction='column' overflowY='scroll' h='180px' mt={2.5} bg='#121212' border='1px solid #333333'>
                                {workspaces.workspaces.map((w) => {
                                    return (
                                        <Text key={w.id} pl={3} py='4px' color='#a3a3a3' fontSize='14px' bg={w.id === workspaces.active.id ? '#090909' : '#121212'} borderBottom='1px solid black' _hover={{bg: '#090909', cursor: 'pointer'}} onClick={() => transferWorkspace(w.id)}>{w.name}</Text>
                                    );
                                })

                                }
                            </Flex>
                        
                            <Flex align="center" direction="row">
                                <Flex align='center' justify='center' w='90px' mt={6} mb={2} bg='#644ED5' borderRadius={10}><Text  fontSize='12.5px' fontWeight={500}>Brand Color</Text></Flex>
                                <Flex w="20px" h="20px" mt={4} ml={2} style={{backgroundColor: `#${brandColor}`}}></Flex>
                            </Flex>
                            <Text mb={-5} color="#A3A3A3" fontSize={11}>Enter hex code (optional)</Text>
                            <Text pos='relative' zIndex={50} top='28px' left='10px' w='10px' color='#333333'>#</Text>
                            <Input pos="relative" pl='24px' color='#a3a3a3' bg='#121212' border='none' borderRadius="0px" _focus={{border: 'none', boxShadow: 'none'}} onChange={handleBrandChange} size='sm' value={brandColor}  />
                            <Text pt={1} color='red' fontSize='9pt'>{error}</Text>
                        </ModalBody>
                    </Box>
                    <ModalFooter h='64px' mt={5} bg='#121212' borderBottomRadius="8px">
                        <Button h='34px' mr={3} px={2} py={0.5} color='white' fontSize='13.5px' bg='#0E0E0E' border='1px solid #242424' borderRadius={0} _hover={{bg: 'red.300', color: 'black'}} onClick={() => deleteWorkspace(activeId)}>Delete</Button>
                        <Button w='146px' h='34px' px={4} py={0.5} fontSize='13.5px' fontWeight={500} bg='#0E0E0E' border='1px solid #242424' borderRadius='0' _hover={{bg: '#181818'}} isLoading={loading} onClick={handleCreateCommunity}>Save Changes</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
export default WorkspaceEditModal;