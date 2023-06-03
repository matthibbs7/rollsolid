import React from 'react';
import { WindowType } from '@/types/windows';
import { Text } from '@chakra-ui/react';
import Timer from '@/components/Modules/Timer/Timer';
import Notes from '@/components/Modules/Notes/Notes';
import Timeseries from '@/components/Charts/Timeseries/Timeseries';

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
    case 'timeseries':
        return <Timeseries processId={processId} />;
    default:
        return (
            <Text>Default ?</Text>
        );

    }
};