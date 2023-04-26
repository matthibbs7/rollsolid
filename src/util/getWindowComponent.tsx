import React from 'react';
import { WindowType } from '@/types/windows';
import { Text } from '@chakra-ui/react';
import Timer from '@/components/Modules/Timer/Timer';

export const getWindowComponent = (type: WindowType) => {
    
    switch (type) {
    case 'chart':
        return (
            <Text>
                    Chart
            </Text>
        );
    case 'notes':
        return (
            <Text>
                    Notes
            </Text>
        );
    case 'timer':
        return <Timer />;
    default:
        return (
            <Text>Default ?</Text>
        );

    }
};