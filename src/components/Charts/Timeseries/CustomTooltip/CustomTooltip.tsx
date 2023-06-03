import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

// todo

export const CustomTooltip = ({ active, payload }: any) => {
    const [time, value] = payload;
    if (active) {
        return (
            <Flex className="custom-tooltip" direction='column'>
                <Text>Stack Size: {value.value}</Text>
                <Text>Hand: #{time.value}</Text>
            </Flex>
        );
    }
    return null;
};
