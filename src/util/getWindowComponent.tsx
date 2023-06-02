import React from 'react';
import { WindowType } from '@/types/windows';
import { Text } from '@chakra-ui/react';
import Timer from '@/components/Modules/Timer/Timer';
import Notes from '@/components/Modules/Notes/Notes';

export const getWindowComponent = (type: WindowType, processId: number) => {

    switch (type) {
    case 'chart':
        return (
            <Text>
                    Chart
            </Text>
        );
    case 'notes':
        return <Notes processId={processId} />;
    case 'timer':
        return <Timer />;
    default:
        return (
            <Text>Default ?</Text>
        );

    }
};