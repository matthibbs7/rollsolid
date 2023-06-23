import { Divider, Flex, Tab, Text, TabList, TabPanel, TabPanels, Tabs, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import PlayerNumber from './PlayerNumber';
import { GuardSpinner } from 'react-spinners-kit';
import PlayCard from '@/components/PlayCard/PlayCard';

interface PieChartComponentProps {
    processId: number;
}

const HOST_PREFIX = process.env.NEXT_PUBLIC_HOST_PREFIX;

const PostFlopAnalysis = ({ processId }: PieChartComponentProps) => {
    const [activeNumber, setActiveNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    const [analysisForm, setAnalysisForm] = useState({
        hand: '',
        sims: '',
    });

    const [estimate, setEstimate] = useState('');

    const getPostFlopAnalysis = async () => {
        console.log(HOST_PREFIX, 'host');
        const request = await fetch(`http://${HOST_PREFIX}/get_win_rate/?my_hand=${analysisForm.hand}&num_sims=${analysisForm.sims}&n_other_players=${activeNumber}`, {
            method: 'GET',
            referrerPolicy: 'unsafe-url' 
        });
        const data = request.json();
        return data;
    };

    const onSubmit = () => {
        setLoading(true);
    
        getPostFlopAnalysis()
            .then((response) => {
                setEstimate(response.win_rate);
            })
            .then(() => setLoading(false));
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnalysisForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <Flex direction='column' overflow='scroll' h='100%' minH='80px' mt={1} mb={2} p={2} px={3} bg='#121212' border='1px solid #343434'>
            <Flex direction="column" w="100%" h="100%">
                <Tabs colorScheme='purple' variant='soft-rounded'>
                    <TabList mt={1.5}>
                        <Tab h='18px' color='#454545' fontSize='13.5px' _selected={{bg: '#E9D8FD', color: '#553C9A'}}>classic</Tab>
                        <Tab h='18px' color='#454545' fontSize='13.5px' _selected={{bg: '#E9D8FD', color: '#553C9A'}}>shorthand</Tab>
                    </TabList>
                    <Divider mt={3} borderColor='#434343' />
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <Flex wrap='wrap' w='100%'>
                                <Flex direction='column' w='40%' minW='170px' maxW='270px' mr={3}>
                                    <Text fontSize='14.5px' fontWeight={600}>Your Hand</Text>
                                    <Text color='#a3a3a3' fontSize='12.5px'>Enter hand with sh notation</Text>
                                    <Input w="100%" minW='160px' maxW='270px' h="28px" fontSize='9.5pt' border="1px solid #353535" borderRadius="0" _focus={{boxShadow: 'none', border: '1px solid gray'}} _placeholder={{color: '#4B4B4B'}} maxLength={5} name='hand' onChange={onChange} placeholder="Ex: kh,as" required />
                                </Flex>
                                <Flex w='30%' mt='-9px' mb={-5}>
                                    {analysisForm.hand.length > 1 &&
                                        <PlayCard suit={analysisForm.hand[1] as ('spade' | 's' | 'club' | 'c' | 'heart' | 'h' | 'diamond' | 'd')} value={analysisForm.hand[0] as ('a' | 'q' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'A' | 'K' | 'k' | 'Q' | 'J' | 'j' | 't')} fontSize='48pt' />
                                    }
                                    {analysisForm.hand.length > 4 &&
                                         <PlayCard suit={analysisForm.hand[4] as ('s' | 'h' | 'spade' | 'club' | 'c' | 'heart' | 'diamond' | 'd')} value={analysisForm.hand[3] as ('A' | 'a' | 'K' | 'k' | 'Q' | 'q' | 'J' | 'j' | '10' | 't' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2')} fontSize='48pt' />
                                    }
                                </Flex>
                            </Flex>
                            <Text mt={4} fontSize='14.5px' fontWeight={600}>Simulations</Text>
                            <Text color='#a3a3a3' fontSize='12.5px'># of monte carlo simulations</Text>
                            <Input w="100%" minW='160px' maxW='270px' h="28px" fontSize='9.5pt' border="1px solid #353535" borderRadius="0" _focus={{boxShadow: 'none', border: '1px solid gray'}} _placeholder={{color: '#4B4B4B'}} name='sims' onChange={onChange} placeholder="Ex: 300" required />
                            <Text mt={4} fontSize='14.5px' fontWeight={600}>Number of other players</Text>
                            <Text color='#a3a3a3' fontSize='12.5px'>Click a number </Text>
                            <Flex direction='column' mt={2}>
                                <Flex>
                                    <PlayerNumber setActiveNumber={setActiveNumber} activeNumber={activeNumber} number={1} />
                                    <PlayerNumber setActiveNumber={setActiveNumber} activeNumber={activeNumber} number={2} ml={2} />
                                    <PlayerNumber setActiveNumber={setActiveNumber} activeNumber={activeNumber} number={3} ml={2} />
                                    <PlayerNumber setActiveNumber={setActiveNumber} activeNumber={activeNumber} number={4} ml={2} />
                                </Flex>
                                <Flex mt={2}>
                                    <PlayerNumber setActiveNumber={setActiveNumber} activeNumber={activeNumber} number={5} ml={4} />
                                    <PlayerNumber setActiveNumber={setActiveNumber} activeNumber={activeNumber} number={6} ml={2} />
                                    <PlayerNumber setActiveNumber={setActiveNumber} activeNumber={activeNumber} number={7} ml={2} />
                                    <PlayerNumber setActiveNumber={setActiveNumber} activeNumber={activeNumber} number={8} ml={2} />
                                </Flex>
                            </Flex>
                            {/* {loading && <BarsSpinner size='24' color='#E9D8FD' />} */}
                            
                            <Button w='94px' h='24px' minH='25px' maxH='25px' mt={6} mb={3} fontSize='10pt' bg='#121212'  border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} isLoading={loading} onClick={onSubmit} type='submit'>Estimate</Button>
                            <Divider mt={3} mb={4} borderColor='#434343' />
                            {loading ? <GuardSpinner size='24' frontColor='#E9D8FD' /> : <Text ml='auto' fontWeight={600}>{estimate}%</Text>}
                            {/* <Slider w='50%' aria-label='slider-ex-1' defaultValue={30}>
                                <SliderTrack bg='#333333'>
                                    <SliderFilledTrack bg='#A99BFB' />
                                </SliderTrack>
                                <SliderThumb bg='#A99BFB' />
                            </Slider> */}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Flex>
    );
};
export default PostFlopAnalysis;