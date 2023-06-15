import { Flex, Text, Box } from '@chakra-ui/react';
import { BiEdit } from 'react-icons/bi';
import { VscDiffAdded } from 'react-icons/vsc';
import React, { useEffect, useState } from 'react';
import WorkspaceAddModal from '../WorkspaceAddModal/WorkspaceAddModal';
import { workspaceState } from '@/atoms/workspaceAtom';
import { useRecoilState } from 'recoil';
import WorkspaceEditModal from '../WorkspaceEditModal/WorkspaceEditModal';

export const WorkspaceNavbar = () => {
    const [activeWorkspace, setActiveWorkspace] = useState(0);
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);

    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [activeId, setActiveId] = useState(workspaces.active.id);

    useEffect(() => {
        setActiveId(workspaces.active.id);
    }, [workspaces.active.id]);

    const transferWorkspace = (selectedId: any) => {
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
        <Flex align='center' w='100%' h='30px' bg='#121212' borderBottom='1px solid #333333'>
            <Flex overflowY='scroll'>
                {workspaces.workspaces.map((w) => {
                    return (
                        <Flex key={w.id} align='center' justify='center' flexShrink='0' h='18px' ml={2.5} p={1} bg={w.id === activeId ? '#AA9BFD' : '#333333'} borderRadius='8px' _hover={{cursor: 'pointer', bg: w.id === activeId ? '#AA9BFD' : '#404040'}} onClick={() => transferWorkspace(w.id)}>
                            <Box mr={2} ml={2}>
                                <Text color={w.id === activeId ? 'black' : 'white'} fontSize='12px' fontWeight={500}>{w.name}</Text>
                            </Box>
                        </Flex>
                    );
                })}
            </Flex>
            <Box mr={1} ml={2.5} color='#333333' _hover={{cursor: 'pointer', color: '#404040'}} onClick={() => setOpen(true)}>
                <VscDiffAdded fontSize='14.5px' />
                    
            </Box>
            <Box mt='-1px' mr={5} ml='auto' color='#333333' _hover={{cursor: 'pointer', color: '#404040'}} onClick={() => setEditOpen(true)}>
                <BiEdit fontSize='15px' />
                    
            </Box>
            <WorkspaceAddModal isOpen={open} handleClose={() => setOpen(false)} />
            <WorkspaceEditModal isOpen={editOpen} handleClose={() => setEditOpen(false)} />  
        </Flex>
    );
};