import React from 'react';
import { WindowType } from '@/types/windows';
import { Flex, Text } from '@chakra-ui/react';
import Timer from '@/components/Modules/Timer/Timer';
import Notes from '@/components/Modules/Notes/Notes';
import Timeseries from '@/components/Charts/Timeseries/Timeseries';
import PieChartComponent from '@/components/Charts/Pie/Pie';
import HandReference from '@/components/Modules/HandReference/HandReference';
import ImpliedOdds from '@/components/Modules/ImpliedOdds/ImpliedOdds';
import PostFlopAnalysis from '@/components/Modules/PostFlopAnalysis/PostFlopAnalysis';

export const getWindowComponent = (type: WindowType, processId: number) => {

    switch (type) {
    case 'chart':
        return (
            <Text>
                    Chart
            </Text>
        );
    case 'notes':
        return (
            <Flex direction='column' overflowY='scroll' h='100%' mb={0}>
                <Notes processId={processId} />
            </Flex>
        );
    case 'timer':
        return <Timer />;
    case 'timeseries':
        return <Timeseries processId={processId} />;
    case 'pie':
        return <PieChartComponent processId={processId} />;
    case 'reference':
        return <HandReference />;
    case 'implied odds':
        return <ImpliedOdds processId={processId} />;
    case 'post flop analysis':
        return <PostFlopAnalysis processId={processId} />;
    default:
        return (
            <Text>Default ?</Text>
        );

    }
};