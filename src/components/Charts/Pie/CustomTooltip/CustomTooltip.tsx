import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const CustomTooltip = ({ active, payload, label }: any) => {
    if (active) {
        return (
            <Flex className="custom-tooltip" direction='column' p='5px' border='1px solid #acacac' bgColor='#121212'>
                <Text fontSize='10.5pt'>Name: {payload[0].name}</Text>
                <Text fontSize='10.5pt'>Stack Size: {payload[0].value}</Text>
            </Flex>
        );
    }
    return null;
};
