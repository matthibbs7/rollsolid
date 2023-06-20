import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

// todo

export const CustomTooltip = ({ active, payload }: any) => {
    const [time, value] = payload;
    if (active) {
        return (
            <Flex className="custom-tooltip" direction='column'>
                <Text fontSize='10.5pt'>Stack Size: {value.value}</Text>
                <Text fontSize='10.5pt'>Hand: #{time.value}</Text>
            </Flex>
        );
    }
    return null;
};
