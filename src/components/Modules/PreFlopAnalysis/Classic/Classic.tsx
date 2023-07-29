import PlayCard from '@/components/PlayCard/PlayCard';
import { Text, Button, Divider, Flex, Input } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { GuardSpinner } from 'react-spinners-kit';
import PlayerNumber from '../PlayerNumber';

const Classic = () => {
    const [activeNumber, setActiveNumber] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const [estimate, setEstimate] = useState();
    const [simulations, setSimulations] = useState(300);
    const [selectorView, setSelectorView] = useState(false);
    const [view, setView] = useState<'ONE' | 'TWO'>('ONE');
    const [cardOne, setCardOne] = useState('');
    const [cardTwo, setCardTwo] = useState('');

    const changeSim = (event: ChangeEvent<HTMLInputElement>) => {
        
        setSimulations(Number(event.target.value));
    };

    return (
        <>
            {selectorView ? <>
                <Flex direction='column' w='100%' minW='170px' maxW='270px' mr={3}>
                    <Text fontSize='14.5px' fontWeight={600}>Select Card </Text>
                    <Text color='#a3a3a3' fontSize='12.5px'>Click a card below to set it to your current hand</Text>
                    
                </Flex>
                <Flex direction='column' w='100%' minW='170px' mt={4} mr={3}>
                    <Text fontSize='14.5px' fontWeight={600}>Hearts</Text>
                    <Flex mt={2}>
                        <Flex align='center' justify='center' w='24px' h='24px' bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}} onClick={() => {setCardOne('ah');setSelectorView(false);}}>
                            <Text fontSize='11pt' fontWeight={600}>A</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}} onClick={() => {view === 'ONE' ? setCardOne('kh') : setCardTwo('kh'); setSelectorView(false);}}>
                            <Text fontSize='11pt' fontWeight={600}>K</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>Q</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>J</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>T</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>9</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>8</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>7</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>6</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>5</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>4</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>3</Text>
                        </Flex>
                        <Flex align='center' justify='center' w='24px' h='24px' ml={2} bg='#202020' _hover={{bg: '#303030', cursor: 'pointer'}}>
                            <Text fontSize='11pt' fontWeight={600}>2</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </> : <>
                <Flex wrap='wrap' w='100%'>
                
                    <Flex direction='column' w='40%' minW='170px' maxW='270px' mr={3}>
                        <Text fontSize='14.5px' fontWeight={600}>Your Hand</Text>
                        <Text color='#a3a3a3' fontSize='12.5px'>Click an empty card to set your card{'\''}s suit and rank</Text>
                    
                    </Flex>
                    <Flex w='40%' mt='0px' mb={-5}>
                        {cardOne === '' ?
                            <Flex align='center' justify='center' w='48px' h='62px' border='1px dashed #505050' _hover={{cursor: 'pointer', border: '1px dashed #808080'}} onClick={() => {setView('ONE');setSelectorView(true);}}>
                                <Text color='#505050'>+</Text>
                            </Flex> : (<Flex mt={-8}>
                                
                                <PlayCard suit={cardOne[1] as ('spade' | 's' | 'club' | 'c' | 'heart' | 'h' | 'diamond' | 'd')} value={cardOne[0] as ('a' | 'q' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'A' | 'K' | 'k' | 'Q' | 'J' | 'j' | 't')} fontSize='60pt' />
                            </Flex>
                            )
                        }
                        <Flex align='center' justify='center' w='48px' h='62px' ml={2} border='1px dashed #505050' _hover={{cursor: 'pointer', border: '1px dashed #808080'}}>
                            <Text color='#505050'>+</Text>
                        </Flex>
                        {/* {analysisForm.hand.length > 1 &&
                                        <PlayCard suit={analysisForm.hand[1] as ('spade' | 's' | 'club' | 'c' | 'heart' | 'h' | 'diamond' | 'd')} value={analysisForm.hand[0] as ('a' | 'q' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'A' | 'K' | 'k' | 'Q' | 'J' | 'j' | 't')} fontSize='48pt' />
                    }
                    {analysisForm.hand.length > 4 &&
                                         <PlayCard suit={analysisForm.hand[4] as ('s' | 'h' | 'spade' | 'club' | 'c' | 'heart' | 'diamond' | 'd')} value={analysisForm.hand[3] as ('A' | 'a' | 'K' | 'k' | 'Q' | 'q' | 'J' | 'j' | '10' | 't' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2')} fontSize='48pt' />
                    } */}
                    </Flex>
                </Flex>
                <Text mt={4} fontSize='14.5px' fontWeight={600}>Simulations</Text>
                <Text color='#a3a3a3' fontSize='12.5px'># of monte carlo simulations</Text>
                <Input w="100%" minW='160px' maxW='270px' h="28px" fontSize='9.5pt' border="1px solid #353535" borderRadius="0" _focus={{boxShadow: 'none', border: '1px solid gray'}} _placeholder={{color: '#4B4B4B'}} name='sims' onChange={changeSim} placeholder="Ex: 300" required value={simulations} />
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
                            
                <Button w='94px' h='24px' minH='25px' maxH='25px' mt={6} mb={3} fontSize='10pt' bg='#121212'  border='1px solid #494D51' borderRadius='0' _hover={{bg: '#171717', border: '1px solid grey'}} isLoading={loading} onClick={() => console.log('i')} type='submit'>Estimate</Button>
                <Divider mt={3} mb={4} borderColor='#434343' />
                {loading ? <GuardSpinner size='24' frontColor='#E9D8FD' /> : <Text ml='auto' fontWeight={600}>{estimate}%</Text>}
            </>}
        </>
    );
};
export default Classic;
