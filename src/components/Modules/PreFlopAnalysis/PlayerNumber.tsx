import { Text, Box } from '@chakra-ui/react';
import React from 'react';

interface PlayerNumberComponentProps {
    activeNumber: number;
    setActiveNumber: (number: number) => void;
    ml?: number;
    number: number;
}

const PlayerNumber = ({ ml, number, activeNumber, setActiveNumber }: PlayerNumberComponentProps) => {
    return (
        <Box ml={ml} bg={number === activeNumber ? '#E9D8FD' : '#222222'} _hover={{cursor: 'pointer', bg: number === activeNumber ? '#E9D8FD' : '#434343'}} onClick={() => setActiveNumber(number)}>
            <Text align='center' w='24px' color={number === activeNumber ? 'black' : 'white'}>{number}</Text>
        </Box>
    );
};
export default PlayerNumber;