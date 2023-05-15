import { Flex, Text, Box } from '@chakra-ui/react';
import { BiEdit } from 'react-icons/bi';
import { VscDiffAdded } from 'react-icons/vsc';
import React, { useState } from 'react';
import WorkspaceAddModal from '../WorkspaceAddModal/WorkspaceAddModal';

export const WorkspaceNavbar = () => {
    const [activeWorkspace, setActiveWorkspace] = useState(0);
    const [open, setOpen] = useState(false);

    return (
        <Flex align='center' w='100%' h='30px' bg='#121212' borderBottom='1px solid #333333'>
            <Flex align='center' justify='center' w='124px' h='18px' mr={0} ml='10px' p={1} px={2} bg='#AA9BFD' borderRadius='8px'>
                <Text mr={1} color='black' fontSize='12px' fontWeight={500}>PokerStars Online</Text>
                    
            </Flex>
                
            <Flex align='center' justify='center' w='98px' h='18px' ml={2.5} p={1} px={2} bg='#333333' borderRadius='8px' _hover={{cursor: 'pointer', bg: '#404040'}}>
                <Text fontSize='12px' fontWeight={500}>Workspace 2</Text>
            </Flex>
            <Flex align='center' justify='center' w='98px' h='18px' ml={2.5} p={1} px={2} bg='#333333' borderRadius='8px' _hover={{cursor: 'pointer', bg: '#404040'}}>
                <Text fontSize='12px' fontWeight={500}>Workspace 3</Text>
                    
            </Flex>
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