import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts';
import { CustomTooltip } from './CustomTooltip/CustomTooltip';
import { v4 as uuid } from 'uuid';
import { WindowState } from '@/types/windows';
import { useRecoilState } from 'recoil';
import { windowsState } from '@/atoms/windowsAtom';

interface TimeseriesProps {
    processId: number;
}

const Timeseries = ({ processId }: TimeseriesProps) => {
    // const [data, setData] = useState([]);
    const [newDataVal, setNewDataVal] = useState<number>(0);

    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);

    const [data, setData] = useState(minimizedWindows.stack.filter((w: WindowState) => w.processId === processId)[0].chartData ? minimizedWindows.stack.filter((w: WindowState) => w.processId === processId)[0].chartData : []);

    useEffect(() => {
        const newMinimizedStack = minimizedWindows.stack.map((w: WindowState) => {
            if (w.processId === processId) {
                return {
                    ...w,
                    chartData: data,
                };
            } else {
                return w;
            }
        });

        setMinimizedWindows((prevState) => ({
            ...prevState,
            stack: newMinimizedStack,
        }));
    }, [data]);

    const handleAddData = () => {
        if (newDataVal !== undefined) {
            if (data) {
                setData([
                    ...data,
                    { id: uuid(), amount: newDataVal, hand: data.length + 1}
                ]);
            } else {
                setData([
                    { id: uuid(), amount: newDataVal, hand: 1}
                ]);
            }
        }
        return;
    };

    const handleClearData = () => {
        setData([]);
    };

    const handleRemoveData = () => {
        if (data) { 
            setData(data.slice(0, -1));
        }
        return;
    };

    return (
        <Flex direction='column' w='100%' h='100%'>
            <Flex direction='column' w='100%' h='73%' mt={1} mb={0} pt={4} pr={3} bg='#121212' border='1px solid #343434' borderBottom='1px solid #121212'>
                {
                    data && data.length >= 1 ? (
                        <ResponsiveContainer width="100%" height='100%'>
                            <ScatterChart>
                                <XAxis
                                    // dataKey="time"
                                    domain={['dataMin', 'dataMax']}
                                    name="Hand"
                                    // tickFormatter={(num: any) => 'test'}
                                    type="number"
                                    dataKey='hand'
                                    scale='linear'
                                />
                                <YAxis scale='linear' dataKey="amount" name="Amount" domain={[0, 'dataMax']} />
                                <Scatter
                                    fill="#A99BFC"
                                    data={data}
                                    line={{ stroke: '#A99BFC' }}
                                    lineType="joint"
                                    lineJointType="monotoneX"
                                    name="Values"
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <CartesianGrid vertical={false} opacity={0.15} strokeDasharray="3 3" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    ) : (
                        <Flex direction='column' w='100%' h='100%' px={5}>
                            <Text fontSize='14pt'>Empty Chart</Text>
                            <Text mt={1.5} color='#a3a3a3'>Begin by adding datapoints below</Text>
                        </Flex>
                    )
                }
                
            </Flex>
            <Flex direction='column' overflow='scroll' h='24%' maxH='88px' mb={1} p={1} px={3} bg='#121212' border='1px solid #343434'>
                <Flex direction="column" w="100%" h="100%">
                    {/* <Text mt={0.5} fontFamily="AvenirNext-Regular" fontSize="11pt">Enter stack amount for each hand:</Text>
                    <Divider /> */}
                    <Flex mt={1.5}>
                        <Input w="50%" h="28px" fontSize='9.5pt' border="1px solid #353535" borderRadius="0" _focus={{boxShadow: 'none', border: '1px solid gray'}} onChange={(event) => setNewDataVal(Number(event.target.value) ? Number(event.target.value) : 0)} placeholder="Ex: 250" value={newDataVal} />
                    
                    </Flex>
                    <Flex mt={2.5}>
                        <Button w='84px' h='24px' minH='24px' maxH='24px'  mb={3} fontSize='10pt' bg='#121212' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} onClick={handleAddData}>Add</Button>
                        <Button w='84px' h='24px' minH='24px' maxH='24px' mb={3}  fontSize='10pt' bg='#121212' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} onClick={handleRemoveData} type='submit'>Remove</Button>
                        <Button w='84px' h='24px' minH='24px' maxH='24px' mb={3}  fontSize='10pt' bg='#121212' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} onClick={handleClearData} type='submit'>Clear</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default Timeseries;