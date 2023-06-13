import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
    PieChart,
    Pie, 
    Cell, 
    Legend,
    ResponsiveContainer,
    Tooltip
} from 'recharts';
import { v4 as uuid } from 'uuid';
import { WindowState } from '@/types/windows';
import { useRecoilState } from 'recoil';
import { windowsState } from '@/atoms/windowsAtom';
import { CustomTooltip } from './CustomTooltip/CustomTooltip';
import { workspaceState } from '@/atoms/workspaceAtom';

interface PieChartComponentProps {
    processId: number;
}

const COLORS = ['#9560E2', '#4DC0B5', '#F6993F', '#F66D9B', '#3490DC', '#6574CD', '#F7CC66', '#38C071', '#F6786F'];

const renderLegend = (props: any) => {
    const { payload } = props;
    console.log(payload, 'PAYLOAD');
    return (
        <Flex wrap='wrap' w='100%'>
            {
                payload.map((entry: any, index: any) => (
                    <Flex key={`${index}`} justify='center' ml={2} my={1.5} px={3} bg={COLORS[index % COLORS.length]} borderRadius={5}>
                        <Text color='black' fontSize='9pt'>{entry.payload.hand}</Text>
                    </Flex>
                ))
            }
        </Flex>
    );
};

const PieChartComponent = ({ processId }: PieChartComponentProps) => {
    const [toggleExistingSelection, setToggleExistingSelection] = useState(false);
    const [editIndex, setEditIndex] = useState(0);
    
    const [newDataVal, setNewDataVal] = useState<number>(0);
    const [newName, setNewName] = useState<string>('');
    
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [minimizedWindows, setMinimizedWindows] = useRecoilState(windowsState);

    // const [data, setData] = useState(minimizedWindows.stack.filter((w: WindowState) => w.processId === processId)[0].pieData ? minimizedWindows.stack.filter((w: WindowState) => w.processId === processId)[0].pieData : []);
    const [data, setData] = useState(workspaces.active.workspace_stack.stack.filter((w: WindowState) => w.processId === processId)[0].pieData ? workspaces.active.workspace_stack.stack.filter((w: WindowState) => w.processId === processId)[0].pieData : []);

    useEffect(() => {
        // const newMinimizedStack = minimizedWindows.stack.map((w: WindowState) => {
        //     if (w.processId === processId) {
        //         return {
        //             ...w,
        //             pieData: data,
        //         };
        //     } else {
        //         return w;
        //     }
        // });

        const newActiveStack = workspaces.active.workspace_stack.stack.map((w: WindowState) => {
            if (w.processId === processId) {
                return {
                    ...w,
                    pieData: data,
                };
            } else {
                return w;
            }
        });

        // setMinimizedWindows((prevState) => ({
        //     ...prevState,
        //     stack: newMinimizedStack,
        // }));

        const newActive = {id: workspaces.active.id, name: workspaces.active.name, workspace_stack: {stack: newActiveStack}};

        setWorkspaces((prevState) => ({
            ...prevState,
            active: newActive,
        }));
    }, [data]);

    const handleAddData = () => {

        if (newDataVal !== undefined && !toggleExistingSelection) {
            if (data) {
                if (data.length === 9) return;
                console.log(newName);
                setData([
                    ...data,
                    { id: uuid(), amount: newDataVal, hand: newName !== '' ? newName : `${data.length + 1}`}
                ]);
            } else {
                setData([
                    { id: uuid(), amount: newDataVal, hand: newName ? newName : '1'}
                ]);
            }
            setNewDataVal(0);
            setNewName('');
        }

        if (newDataVal !== undefined && toggleExistingSelection) {
            if (data) {
                if (data.length === 1) {
                    setData([{id: data[0].id, amount: newDataVal, hand: newName ? newName : '1'}]);
                } else {
                    const dataClone = [...data];
                    dataClone[editIndex] = {id: data[editIndex].id, amount: newDataVal, hand: newName ? newName : '1'};
                    setData(dataClone);
                }
                setToggleExistingSelection(false);
                setNewDataVal(0);
                setNewName('');
            }
        }
        return;
    };

    const handleClearData = () => {
        setData([]);
    };

    const handleRemoveData = () => {
        if (data) {
            if (!toggleExistingSelection) {
                setData(data.slice(0, -1));
                return;
            } 
            setData(data.filter((value, i) => i !== editIndex));
            setToggleExistingSelection(false);
            setNewDataVal(0);
            setNewName('');
        }
        return;
    };

    return (
        <Flex direction='column' w='100%' h='100%'>
            <Flex direction='column' w='100%' h='73%' mt={1} mb={0} pt={4} pr={3} bg='#121212' border='1px solid #343434' borderBottom='1px solid #121212'>
                {
                    data && data.length >= 1 ? (
                        <ResponsiveContainer width="99%" height='99%'>
                            <PieChart >
                                <Pie
                                    data={data}
                                    color="#000000"
                                    dataKey="amount"
                                    nameKey="hand"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={'80%'}
                                    innerRadius={'50%'}
                                    fill="#8884d8"
                                    
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            onClick={() => {setToggleExistingSelection(true);setNewName(entry.hand);setNewDataVal(entry.amount);setEditIndex(index);}}
                                            key={`${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                            stroke="#666666"
                                        />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                                <Legend content={renderLegend} />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <Flex direction='column' w='100%' h='100%' px={5}>
                            <Text fontSize='12pt'>Empty Pie Chart</Text>
                            <Text mt={1.5} color='#a3a3a3' fontSize='10.5pt'>Begin by adding datapoints below. Edit existing values by clicking on the corresponding piece of the Pie.</Text>
                        </Flex>
                    )
                }
                
            </Flex>
            <Flex direction='column' overflow='scroll' h='24%' maxH='88px' mb={1} p={1} px={3} bg='#121212' border='1px solid #343434'>
                <Flex direction="column" w="100%" h="100%">
                    <Flex mt={1.5}>
                        <Input w="40%" h="28px" fontSize='9.5pt' border="1px solid #353535" borderRadius="0" _focus={{boxShadow: 'none', border: '1px solid gray'}} _placeholder={{color: '#4B4B4B'}} onChange={(event) => setNewName(event.target.value)} placeholder="Name" value={newName} />
                        <Input w="22%" h="28px" fontSize='9.5pt' border="1px solid #353535" borderRadius="0" _focus={{boxShadow: 'none', border: '1px solid gray'}} onChange={(event) => setNewDataVal(Number(event.target.value) ? Number(event.target.value) : 0)} placeholder="Ex: 250" value={newDataVal} />
                    </Flex>
                    <Flex mt={2.5}>
                        <Button w='84px' h='24px' minH='24px' maxH='24px'  mb={3} fontSize='10pt' bg='#121212' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} onClick={handleAddData}>{toggleExistingSelection ? 'Edit' : 'Add'}</Button>
                        <Button w='84px' h='24px' minH='24px' maxH='24px' mb={3}  fontSize='10pt' bg='#121212' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} onClick={handleRemoveData} type='submit'>Remove</Button>
                        <Button w='84px' h='24px' minH='24px' maxH='24px' mb={3}  fontSize='10pt' bg='#121212' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} onClick={handleClearData} type='submit'>Clear</Button>
                        {toggleExistingSelection && <Button w='84px' h='24px' minH='24px' maxH='24px' mb={3}  fontSize='10pt' bg='#121212' border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} onClick={() => {setToggleExistingSelection(false);setNewDataVal(0); setNewName('');}} type='submit'>Cancel</Button>}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default PieChartComponent;