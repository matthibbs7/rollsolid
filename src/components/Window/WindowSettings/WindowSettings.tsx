import React from 'react';
import { Text, Flex, Input, Box, Switch, Button } from '@chakra-ui/react';
import { WindowState } from '@/types/windows';
import { windowsState } from '@/atoms/windowsAtom';
import { useRecoilState } from 'recoil';
import { workspaceState } from '@/atoms/workspaceAtom';

interface WindowSettingsProps {
    pId: number;
    windowTitle: string;
    windowDefaultTitle: string;
    windowColor: string;
    setWindowTitle: (title: string) => void;
    setWindowColor: (color: string) => void;
}

export const WindowSettings = ({
    pId, 
    windowTitle, 
    windowDefaultTitle, 
    windowColor, 
    setWindowTitle, 
    setWindowColor,
}: WindowSettingsProps) => {
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);
    // persisted memory after 'save' clicked
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // check if name is different
        // const specificWindowState = minimizedWindows.stack.filter((w: WindowState) => w.processId === pId)[0];

        const specificWindowState = workspaces.active.workspace_stack.stack.filter((w: WindowState) => w.processId === pId)[0];

        if (windowTitle === specificWindowState.widgetName && windowColor === specificWindowState.handleColor) {
            // TODO feedback to user -> same name as error
            return;
        }
        // const newMinimizedStack = minimizedWindows.stack.map((w: WindowState) => {
        //     if (w.processId === pId) {
        //         return {
        //             ...w,
        //             widgetName: windowTitle,
        //             handleColor: windowColor,
        //         };
        //     } else {
        //         return w;
        //     }
        // });

        const newActiveStack = workspaces.active.workspace_stack.stack.map((w: WindowState) => {
            if (w.processId === pId) {
                return {
                    ...w,
                    widgetName: windowTitle,
                    handleColor: windowColor,
                };
            } else {
                return w;
            }
        });

        // setMinimizedWindows((prevState) => ({
        //     ...prevState,
        //     stack: newMinimizedStack,
        // }));

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: newActiveStack}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));

    };

    return (
        <Flex direction='column' overflow='scroll' minH='80px' mt={1} mb={10} p={2} px={3} bg='#121212' border='1px solid #343434'>
            <form onSubmit={onSubmit}>
                <Text color='#C7AE7A' fontWeight={600}>Settings</Text>
                <Flex align='center' mt={2}>
                    <Flex direction='column'>
                        <Text>Widget Name</Text>
                        <Text color='#868686' fontSize='10.5pt' fontStyle='italic'>Title displayed on the window handle</Text>
                    </Flex>
                    <Input maxW='120px' maxH='26px' ml='auto' pl={2} fontSize='10.5pt' border='1px solid #494D51' borderRadius='0' _focus={{border: '1px solid white'}} _placeholder={{color: 'grey'}} maxLength={20} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setWindowTitle(event.target.value)} placeholder={windowDefaultTitle} value={windowTitle} />
                    {/* <Switch ml='auto' variant='boxy' /> */}
                </Flex>
                <Flex align='center' mt={2}>
                    <Flex direction='column'>
                        <Text>Handle Color</Text>
                        <Text color='#868686' fontSize='10.5pt' fontStyle='italic'>Hex code for handle color</Text>
                    </Flex>
                    <Flex align='center' ml='auto'>
                        <Box w='24px' h='24px' mr={-0.5} bg={`#${windowColor}`} border='1px solid #494D51' _hover={{cusor: 'pointer'}} />
                        <Text pos='relative' top='1px' left='24px' w='10px' color='grey'>#</Text>
                        <Input pos='relative' maxW='84px' maxH='26px' ml={1} pt={0.5} pr={1} pl={6} fontSize='10.5pt' border='1px solid #494D51' borderRadius='0' _focus={{border: '1px solid white'}} disabled maxLength={6} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setWindowColor(event.target.value);}} placeholder='ffffff' value={windowColor} />
                    </Flex>
                </Flex>
                <Flex align='center' mt={2}>
                    <Flex direction='column'>
                        <Text>Lock Position</Text>
                        <Text color='#868686' fontSize='10.5pt' fontStyle='italic'>Disable resize/drag</Text>
                    </Flex>
                    <Switch ml='auto' variant='boxy' />
                </Flex>
                <Button w='84px' h='26px' mt={5} mb={1} bg='black' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} type='submit'>Save</Button>
            </form>
        </Flex>
    );
};
export default WindowSettings;