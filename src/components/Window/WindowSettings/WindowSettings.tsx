import React, { useState } from 'react';
import { Text, Flex, Input, Box, Switch, Button } from '@chakra-ui/react';

interface WindowSettingsProps {
    windowTitle: string;
    windowDefaultTitle: string;
    windowColor: string;
    setWindowTitle: (title: string) => void;
    setWindowColor: (color: string) => void;
}

export const WindowSettings = ({ 
    windowTitle, 
    windowDefaultTitle, 
    windowColor, 
    setWindowTitle, 
    setWindowColor 
}: WindowSettingsProps) => {
    // const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);
    const [stateSettings, setStateSettings] = useState({
        widgetName: windowDefaultTitle,
        handleColor: '#121212',
        lockResize: false,
    });
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    };

    return (
        <Flex direction='column' overflow='scroll' minH='80px' mt={1} mb={10} p={2} px={3} bg='#121212' border='1px solid #343434'>
            <form>
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
                        <Box w='20px' h='20px' bg={`#${windowColor}`} />
                        <Text pos='relative' top='1px' left='24px' w='10px' color='grey'>#</Text>
                        <Input pos='relative' maxW='84px' maxH='26px' ml={1} pt={0.5} pr={1} pl={6} fontSize='10.5pt' border='1px solid #494D51' borderRadius='0' _focus={{border: '1px solid white'}} maxLength={6} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setWindowColor(event.target.value);}} placeholder='ffffff' value={windowColor} />
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