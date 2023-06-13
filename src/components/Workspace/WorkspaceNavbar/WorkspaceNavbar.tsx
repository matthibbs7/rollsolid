import { Flex, Text, Box } from '@chakra-ui/react';
import { BiEdit } from 'react-icons/bi';
import { VscDiffAdded } from 'react-icons/vsc';
import React, { useState } from 'react';
import WorkspaceAddModal from '../WorkspaceAddModal/WorkspaceAddModal';
import { workspaceState } from '@/atoms/workspaceAtom';
import { useRecoilState } from 'recoil';

export const WorkspaceNavbar = () => {
    const [activeWorkspace, setActiveWorkspace] = useState(0);
    const [open, setOpen] = useState(false);

    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [activeId, setActiveId] = useState(workspaces.active.id);

    const transferWorkspace = (selectedId: number) => {
        // update current active id in workspaces
        if (selectedId === activeId) {
            return;
        }

        const currentActiveWorkspaceID = workspaces.active.id;

        const indexOfItemInArray = workspaces.workspaces.findIndex(w => w.id === currentActiveWorkspaceID);
        console.log(indexOfItemInArray);
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
        <Flex align='center' w='100%' h='30px' bg='#121212' borderBottom='1px solid #333333'>
            {workspaces.workspaces.map((w) => {

                return (
                    <Flex key={w.id} align='center' justify='center' h='18px' ml={2.5} p={1} px={2.5} bg={w.id === activeId ? '#AA9BFD' : '#333333'} borderRadius='8px' _hover={{cursor: 'pointer', bg: w.id === activeId ? '#AA9BFD' : '#404040'}} onClick={() => transferWorkspace(w.id)}>
                        <Text color={w.id === activeId ? 'black' : 'white'} fontSize='12px' fontWeight={500}>{w.name}</Text>
                    
                    </Flex>
                );
            })}
            <Box ml={2.5} color='#333333' _hover={{cursor: 'pointer', color: '#404040'}} onClick={() => setOpen(true)}>
                <VscDiffAdded fontSize='14.5px' />
                    
            </Box>
            <Box mr={5} ml='auto' color='#333333' _hover={{cursor: 'pointer', color: '#404040'}}>
                <BiEdit fontSize='14.5px' />
                    
            </Box>
            <WorkspaceAddModal isOpen={open} handleClose={() => setOpen(false)} />
                        
        </Flex>
    );
};