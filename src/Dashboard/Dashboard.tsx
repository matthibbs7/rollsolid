import { IdenticonImg } from '@/components/Navbar/IdenticonImage.tsx/IdenticonImage';
import DeleteDropDown from '@/components/Navbar/ShareDropDown/DeleteDropDown/DeleteDropDown';
import { auth, firestore } from '@/firebase/clientApp';
import { UserDashboard } from '@/types/user-dashboard';
import { SandboxTemplate } from '@/util/dashboard-templates';
import { Flex, Text, Image, Divider, Button, Input, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiCalendarCheck } from 'react-icons/bi';
import { BsCheck, BsCreditCard2Back, BsPersonCircle } from 'react-icons/bs';
import { GiRollingBomb } from 'react-icons/gi';
import { MdLockPerson, MdLogout } from 'react-icons/md';
import safeJsonStringify from 'safe-json-stringify';

// TODO
// CHECK IF USER HAS 3 DASHBOARDS IN users collection dashboards attribute
// GET RANDOM ID
// CREATE DOCUMENT WITH ID as NAME in dashboards collection with template
// ADD DOCUMENT ID to dashboards attribute in users collection
// PUSH TO NEW ID ROUTE ONCE CREATED
// UPDATE ID ROUTE to be DYNAMIC not just /test hardcoded

const colorData = [{'#FC8181': {bgColor: '#FEB2B2', hColor: '#F56565'}}, {'#F6AD55': {bgColor: '#FBD38D', hColor: '#ED8936'}}, {'#68D391': {bgColor: '#9AE6B4', hColor: '#48BB78'}}];

// const dashboardData = [
//     {
//         name: 'test',
//         color: '#FC8181'
//     },
//     {
//         name: 'Datadog',
//         color: '#F6AD55'
//     },
//     {
//         name: 'PokerStars',
//         color: '#68D391'
//     }
// ];

enum TemplateDashboard {
    SANDBOX = 'SANDBOX',
    STARTER = 'STARTER',
    POKERWIZ = 'POKERWIZ',
    RSPRO = 'RSPRO',
}

enum DashboardColor {
    GRAY = '#222222',
    RED = 'red.300',
    GREEN = 'green.300',
    PURPLE = 'purple.300',
    ORANGE = 'orange.300'
}

const generateRandomString = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < 6; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
};

export const DashboardComponent = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const emailRegex = /.+?(?=@)/;

    const [viewState, setViewState] = useState<'DASHBOARD' | 'CREATE'>('DASHBOARD');
    
    const [name, setName] = useState('');
    const [dashSelected, setDashSelected] = useState<TemplateDashboard>(TemplateDashboard.SANDBOX);
    const [color, setColor] = useState<DashboardColor>(DashboardColor.GRAY);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [dashboardData, setDashboardData] = useState<any>([]);
    
    useEffect(() => {
        let active = true;
        loadUserData();
        return () => { active = false; };

        async function loadUserData() {
            if (!user) {
                return;
            }
            const userEmail = user.email;
            if (userEmail === null) {
                return;
            }
    
            const eventDocRef = doc(firestore, 'users', userEmail);
            const userDoc = await getDoc(eventDocRef);
            const userData = userDoc.exists() ? JSON.parse(safeJsonStringify({...userDoc.data()})) : '';
            if (userData === '') {
                return;
            } 
            const newUserDashboards = [...userData.userDashboards];
            if (!active) { return; }
            setDashboardData(newUserDashboards);
        }
        
    }, [user, dashboardData]);
    
    const onSubmit = async () => {
        setLoading(true);
        setError('');

        if (!user) {
            setError('No user detected');
            setLoading(false);
            return;
        }

        if (name === '') {
            setError('A dashboard name is required');
            setLoading(false);
            return;
        }
        console.log(name, color, dashSelected);

        // create new dashboard document with newID
        // add dashboard ID to user document attribute
        let newUserDashboard;
        let userEmail;

        try {
            userEmail = user.email;
            if (userEmail === null) {
                setLoading(false);
                return;
            }
            const eventDocRef = doc(firestore, 'users', userEmail);
            const userDoc = await getDoc(eventDocRef);
            const userData = userDoc.exists() ? JSON.parse(safeJsonStringify({...userDoc.data()})) : '';
            if (userData === '') {
                setLoading(false);
                return;
            } 
            newUserDashboard = [...userData.userDashboards];
            if (newUserDashboard.length === 3) {
                setError('You have reached the max number of dashboards. Delete one on the overview page to create a new dashboard.');
                setLoading(false);
                return;
            }
        } catch (err) {
            console.log(error);
            return;
        }
        
        const newId = await generateUUID();
        
        try {
            const newDashboard: UserDashboard = {
                dashboardName: name,
                dashboardColor: color,
                dashboardWorkspaces: SandboxTemplate,
            };
    
            await setDoc(doc(firestore, 'dashboard', newId), {...newDashboard});
            await updateDoc(doc(firestore, 'users', userEmail), {userDashboards: [...newUserDashboard, {dashboardId: newId, dashboardName: name, dashboardColor: color}]}); 
        } catch (err) {
            setError('Welp this is awkward, but it appears something has broke! :(');
            console.log(err);
            setLoading(false);
            return;
        }

        setLoading(false);
        router.push(`/${newId}`);
        
    };

    const generateUUID = async () => {
        // get random 6 alphanumeric value
        // check if id already exists in firestore
        let newId = '';
        let exists = true;
        while (exists) {
            newId = generateRandomString();
            const eventDocRef = doc(firestore, 'dashboard', newId);
            const eventDoc = await getDoc(eventDocRef);
                  
            if (eventDoc.exists()) {
                continue;
            }
            exists = false;
        }
        return newId;
    };

    const onDelete = async (deleteId: string) => {
        if (!user) {
            return;
        }
        const userEmail = user.email;
        if (userEmail === null) {
            return;
        }
        const eventDocRef = doc(firestore, 'users', userEmail);
        const userDoc = await getDoc(eventDocRef);
        const userData = userDoc.exists() ? JSON.parse(safeJsonStringify({...userDoc.data()})) : '';
        if (userData === '') {
            setLoading(false);
            return;
        } 

        const newUserDashboards = userData.userDashboards.filter((d: any) => d.dashboardId !== deleteId);
        await updateDoc(doc(firestore, 'users', userEmail), {userDashboards: [...newUserDashboards]}); 
        setDashboardData(newUserDashboards);
        console.log(deleteId);
        const deleteDocRef = doc(firestore, 'dashboard', deleteId);
        const deleteRef = await getDoc(deleteDocRef);
        if (deleteRef.exists()) {
            await deleteDoc(deleteDocRef);
        }
    };

    return (
        <Flex direction="column" w="100%">
            <Flex justify="center" w="100%"  mb={4} px={4} py={4}>
                <Flex direction={['column', 'column', 'row', 'row']} w={['100%', '100%', '100%', '100%']} maxW="1228px" mt={[0,0,2,2]} px={0} bg="#121212" border="1px solid #333" borderRadius={4}>
                    <Flex direction='column' display={{md: 'unset', lg: 'flex'}} w='280px' minW='280px' h='100%' px={5} py={8} bg='#0E0E0E' borderRight='1px solid #333' borderTopLeftRadius={4} borderBottomLeftRadius={4}>
                        <Flex align='center' w='100%' h='28px' pl={2}>
                            <Flex align='center' justify='center' w='24px' h='24px' mr={4} p={1} pb={1} bg='none' border='1px solid #333333' borderRadius='4px'>
                                <IdenticonImg username={user?.email?.match(emailRegex)?.toString() ?? ''}  saturation='50' lightness='50' height="59px" width="59px" />
                            </Flex>
                            <Text mt={0.5} color='#c2c2c2' fontWeight={500}>{user?.email?.match(emailRegex)?.toString() ?? ''}</Text>
                            <Flex align='center' mr={5} ml='auto' p={2.5} _hover={{bg: '#333333', cursor: 'pointer'}}>
                                <AiOutlineSetting color='#c2c2c2' />
                            </Flex>
                        </Flex>
                        
                        <Flex align='center' w='100%' h='36px' mt={10} px={3} color='#999' borderRadius={3} _hover={{bg: '#242424', color: '#c2c2c2', cursor: 'pointer'}} onClick={() => router.push('/profile')}>
                            <BsPersonCircle  fontSize='16px' />
                            <Text ml={4} fontSize='14px' fontWeight={500}>Profile</Text>
                            
                        </Flex>
                        <Flex align='center' w='100%' h='36px' px={3} color='#999' borderRadius={3} _hover={{bg: '#242424', color: '#c2c2c2', cursor: 'pointer'}} onClick={() => router.push('/reset-password')}>
                            <MdLockPerson  fontSize='18px' />
                            <Text ml={4} fontSize='14px' fontWeight={500}>Reset Password</Text>
                            
                        </Flex>
                        <Text mt={8} ml={3} color='#999' fontSize='13px'>Payment</Text>
                        <Flex align='center' w='100%' h='36px' mt={2} px={2.5} color='#999' borderRadius={3} _hover={{bg: '#242424', color: '#c2c2c2', cursor: 'not-allowed'}}>
                            <BiCalendarCheck  fontSize='18px' />
                            <Text ml={4} fontSize='14px' fontWeight={500}>Subscriptions</Text>
                            
                        </Flex>
                        <Flex align='center' w='100%' h='36px' px={3} color='#999' borderRadius={3} _hover={{bg: '#242424', color: '#c2c2c2', cursor: 'not-allowed'}}>
                            <BsCreditCard2Back  fontSize='18px' />
                            <Text ml={4} fontSize='14px' fontWeight={500}>Billing</Text>
                            
                        </Flex>
                        
                        <Flex align='center' w='100%' h='36px' mt='auto' px={3} color='#999' borderRadius={3} _hover={{bg: '#242424', color: '#c2c2c2', cursor: 'pointer'}} onClick={() => signOut(auth)}>
                            <MdLogout  fontSize='18px' />
                            <Text ml={4} fontSize='14px' fontWeight={500}>Logout</Text>
                            
                        </Flex>
                    </Flex>
                    <Flex direction='column' w='100%' px={14}>
                        {viewState === 'DASHBOARD' ? (
                            <>
                                <Flex direction="row" mt={9} mr='auto' mb={5}>
                                    <Text fontFamily="AvenirNext-DemiBold" fontSize={['20pt', '24pt', '24pt', '28pt']}>Welcome Back</Text>
                                </Flex>
                                <Text fontSize='24px' fontWeight={400}>Your Dashboards</Text>
                                {/* <Text mt={4} color='#999' fontSize='16px'>Currently you don{'\''}t have any dashboards.</Text> */}
                                <Flex wrap='wrap'>
                                    {dashboardData.map((d: {dashboardId: string, dashboardName: string, dashboardColor: string}, i: number) => {
                                        return (
                                            <Flex key={i}>
                                                <DeleteDropDown color={d.dashboardColor} dashboardId={d.dashboardId} onDelete={onDelete} />
                                                
                                                <Flex zIndex={2} w='260px' h='150px' mt={8} mr={4} bg={d.dashboardColor ?? '#222'} borderRight="1.5px solid #333" borderBottom='2px solid #333' borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'pointer' }} onClick={() => router.push(`/${d.dashboardId}`)}>
                                
                                                    <Text pos='absolute' mt='116px' ml={1.5} px={2} fontSize='14px' fontWeight={600}>{d.dashboardName} →</Text>
                                                </Flex>
                                            </Flex>
                                        );
                                    })}
                                    
                                </Flex>
                                <Divider mt='90px' />
                                <Flex w='260px' h='150px' mt={8} mb={14} bg='#222' border='2px dashed #292929' borderRadius={4} shadow='#222 20px 20px 40px 100px inset' _hover={{ transform: 'translateY(-1.5px)', bg: '#222', cursor: 'pointer' }} onClick={() => setViewState('CREATE')}>
                                    <Image opacity='24%' borderRadius={4}  _hover={{scale: '1.5'}} src='https://i.imgur.com/cy2cu4e.png' />
                                    {/* <AiOutlinePlus color='#606060' style={{position: 'absolute', fontSize: '44px', marginTop: '46px', marginLeft: '104px'}} /> */}
                                    <Text pos='absolute' mt='116px' ml={1.5} px={2} color='#fff' fontSize='14px' fontWeight={600}>Create New Dashboard →</Text>
                                </Flex>
                            </>
                        ) : (
                            <Flex direction='column' w='100%'>
                                <Flex align='center' direction="row" w='100%' mt={9} mr='auto' mb={5}>
                                    
                                    <Text ml={0} fontFamily="AvenirNext-DemiBold" fontSize={['20pt', '24pt', '24pt', '28pt']}>Create Dashboard</Text>
                                    <Flex mt={1} ml='auto' p={3} py={1.5} color='#999' borderRadius={4} _hover={{cursor: 'pointer', color: '#aaa', bg: '#0E0E0E'}} onClick={() => setViewState('DASHBOARD')}>
                                        <Text  fontSize='10pt'>Go Back to Overview</Text>
                                        {/* <BsArrowLeft style={{marginLeft: '-38px', marginTop: '-10px'}} color='#999' fontSize='14pt' /> */}
                                    </Flex>
                                    
                                </Flex>
                                <Text color='#acacac' fontSize='13px'>Dashboard name</Text>
                                
                                <Input w={['100px', '200px', '416px', '320px']} h='34px' mt={2} color='#acacac' fontSize='14px' fontWeight={500} bg='#222' border='1px solid #222' borderRadius={3} shadow='none' _hover={{border: '1px solid #644ED4'}} _active={{border: '1px solid #644ED4'}}_focus={{border: '1px solid #644ED4', boxShadow: 'none'}} _placeholder={{color: '#444'}} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} placeholder={`${user?.email?.match(emailRegex)?.toString() ?? 'rollsolid'}'s dashboard`} value={name} />
                                <Text mt={8} color='#acacac' fontSize='12px'>Begin with a blank dashboard</Text>
                                <Flex mt={-4}>      
                                    <Flex zIndex={2} w='200px' h='120px' mt={8} mr={4} bg={'#222'}  borderRight={'1.5px solid #333'} borderBottom={'2px solid #333'} borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'pointer' }} onClick={() => setDashSelected(TemplateDashboard.SANDBOX)}>
                                        {dashSelected === TemplateDashboard.SANDBOX && (
                                            <Flex pos='absolute' align='center' justify='center' w='60px' h='20px' mt='12px' ml='13px' bg='#644ED5' borderRadius={4}>
                                                <Text color='white' fontSize='12px'>Selected</Text>
                                            </Flex>
                                        )}
                                        <Flex pos='absolute' align='center' justify='center' w='50px' h='20px' mt='12px' ml='136px' bg='pink.200' borderRadius={4}>
                                            <Text color='black' fontSize='12px'>Default</Text>
                                        </Flex>
                                        <GiRollingBomb style={{position: 'absolute',marginLeft: '12px', marginTop: '90px'}} />
                                        <Text pos='absolute' mt='88px' ml={7} px={2} fontSize='14px' fontWeight={600}>Sandbox →</Text>
                                    </Flex>
                                </Flex>
                                <Accordion border='none' allowToggle>
                                    <AccordionItem p={0} border='none'>
                                        <AccordionButton mt={8} ml={-4} color='#acacac' fontSize='12px' _hover={{cursor: 'pointer', color: '#ccc'}}>
                                            <Box textAlign='left'>
                                                    or start from a <i>template dashboard</i>&nbsp;
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Flex wrap='wrap' mt={-4} ml={-4}>
                                    
                                                <Flex>      
                                                    <Flex zIndex={2} w='200px' h='120px' mt={8} mr={4} bg={'#222'} borderRight={'1.5px solid #333'} borderBottom={'2px solid #333'} borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'pointer' }} onClick={() => setDashSelected(TemplateDashboard.STARTER)}>
                                                        {dashSelected === TemplateDashboard.STARTER && (
                                                            <Flex pos='absolute' align='center' justify='center' w='60px' h='20px' mt='12px' ml='13px' bg='#644ED5' borderRadius={4}>
                                                                <Text color='white' fontSize='12px'>Selected</Text>
                                                            </Flex>
                                                        )}
                                                        <Flex pos='absolute' align='center' justify='center' w='60px' h='20px' mt='12px' ml='128px' bg='green.300' borderRadius={4}>
                                                            <Text color='black' fontSize='12px'>Beginner</Text>
                                                        </Flex>
                                                        <GiRollingBomb style={{position: 'absolute',marginLeft: '12px', marginTop: '90px'}} />
                                                        <Text pos='absolute' mt='88px' ml={7} px={2} fontSize='14px' fontWeight={600}>Starter →</Text>
                                                    </Flex>
                                                </Flex>

                                                <Flex>      
                                                    <Flex zIndex={2} w='200px' h='120px' mt={8} mr={4} bg={'#222'}  borderRight={'1.5px solid #333'} borderBottom={'2px solid #333'} borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'pointer' }} onClick={() => setDashSelected(TemplateDashboard.POKERWIZ)}>
                                                        {dashSelected === TemplateDashboard.POKERWIZ && (
                                                            <Flex pos='absolute' align='center' justify='center' w='60px' h='20px' mt='12px' ml='13px' bg='#644ED5' borderRadius={4}>
                                                                <Text color='white' fontSize='12px'>Selected</Text>
                                                            </Flex>
                                                        )}
                                                        <Flex pos='absolute' align='center' justify='center' w='80px' h='20px' mt='12px' ml='108px' bg='orange.300' borderRadius={4}>
                                                            <Text color='black' fontSize='12px'>Intermediate</Text>
                                                        </Flex>
                                                        <GiRollingBomb style={{position: 'absolute',marginLeft: '12px', marginTop: '90px'}} />
                                                        <Text pos='absolute' mt='88px' ml={7} px={2} fontSize='14px' fontWeight={600}>Poker Wiz →</Text>
                                                    </Flex>
                                                </Flex>

                                                <Flex>      
                                                    <Flex zIndex={2} w='200px' h='120px' mt={8} mr={4} bg={'#222'} border={dashSelected === TemplateDashboard.RSPRO ? '1.5px solid #644ED4' : 'none'} borderRight={dashSelected === TemplateDashboard.RSPRO ? '1.5px solid #644ED4' : '1.5px solid #333'} borderBottom={dashSelected === TemplateDashboard.RSPRO ? '1.5px solid #644ED4' : '2px solid #333'} borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'not-allowed' }}>
                                                        <Flex pos='absolute' align='center' justify='center' w='70px' h='20px' mt='12px' ml='118px' bg='red.300' borderRadius={4}>
                                                            <Text color='black' fontSize='12px'>Advanced</Text>
                                                        </Flex>
                                                        <GiRollingBomb style={{position: 'absolute',marginLeft: '12px', marginTop: '90px'}} />
                                                        <Text pos='absolute' mt='88px' ml={7} px={2} fontSize='14px' fontWeight={600}>Rollsolid Pro →</Text>
                                                    </Flex>
                                                </Flex>
                                    
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion border='none' allowToggle>
                                    <AccordionItem p={0} border='none'>
                                        <AccordionButton mt={0} ml={-4} color='#acacac' fontSize='12px' _hover={{cursor: 'pointer', color: '#ccc'}}>
                                            <Box textAlign='left'>
                                                    dashboard color (optional)&nbsp;
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Flex wrap='wrap' mt={-4} ml={-4}>
                                                
                                                <Flex>
                                                    
                                                    <Flex zIndex={1} w='40px' h='40px' mt={8} mr={4} bg='#222' borderRight={'1.5px solid #333'} borderBottom={'2px solid #333'} borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'pointer' }} onClick={() => setColor(DashboardColor.GRAY)}>
                                                        {color === DashboardColor.GRAY && <BsCheck fontSize='22pt' style={{zIndex: '3', position: 'absolute',marginLeft: '5px', marginTop: '5px'}} /> }
                                                    </Flex>
                                                </Flex>
                                                <Flex>      
                                                    <Flex zIndex={2} w='40px' h='40px' mt={8} mr={4} bg='red.300' borderRight={'1.5px solid #333'} borderBottom={'2px solid #333'} borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'pointer' }} onClick={() => setColor(DashboardColor.RED)}>
                                                        {color === DashboardColor.RED && <BsCheck fontSize='22pt' style={{zIndex: '3', position: 'absolute',marginLeft: '5px', marginTop: '5px'}} /> }
                                                    </Flex>
                                                </Flex>

                                                <Flex>      
                                                    <Flex zIndex={2} w='40px' h='40px' mt={8} mr={4} bg='green.300' borderRight={'1.5px solid #333'} borderBottom={'2px solid #333'} borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'pointer' }} onClick={() => setColor(DashboardColor.GREEN)}>
                                                        {color === DashboardColor.GREEN && <BsCheck fontSize='22pt' style={{zIndex: '3', position: 'absolute',marginLeft: '5px', marginTop: '5px'}} /> }
                                                    </Flex>
                                                </Flex>

                                                <Flex>      
                                                    <Flex zIndex={2} w='40px' h='40px' mt={8} mr={4} bg='purple.300' borderRight={'1.5px solid #333'} borderBottom={'2px solid #333'} borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'pointer' }} onClick={() => setColor(DashboardColor.PURPLE)}>
                                                        {color === DashboardColor.PURPLE && <BsCheck fontSize='22pt' style={{zIndex: '3', position: 'absolute',marginLeft: '5px', marginTop: '5px'}} /> }
                                                    </Flex>
                                                </Flex>

                                                <Flex>      
                                                    <Flex zIndex={2} w='40px' h='40px' mt={8} mr={4} bg='orange.300' borderRight={'1.5px solid #333'} borderBottom={'2px solid #333'} borderRadius={4} _hover={{ transform: 'translateY(-1.5px)', cursor: 'pointer' }} onClick={() => setColor(DashboardColor.ORANGE)}>
                                                        {color === DashboardColor.ORANGE && <BsCheck fontSize='22pt' style={{zIndex: '3', position: 'absolute',marginLeft: '5px', marginTop: '5px'}} /> }
                                                    </Flex>
                                                </Flex>
                                    
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                                {/* <Divider mt={8} borderColor='#333' /> */}
                                {error && <Text mt={4} mb={-8} color='red.300' fontSize='12px'>Error: {error}</Text>}
                                <Button w='160px' mt={10} color='white' fontSize='14px' bg='#644ED5' borderRight='1.5px solid gray' borderBottom='1.5px solid gray' borderRadius={3} _hover={{ transform: 'translateY(-1.5px)'}} isLoading={loading} onClick={onSubmit} transitionDuration='400ms'>Create Dashboard</Button>
                                <Text w='600px' mt={4} mb={10} color='#636363' fontSize='12px'>Note: Without Rollsolid Pro you are limited to 3 Dashboards per account. Additionally, Dashboard names cannot be changed after creation but you may delete existing Dashboards on the Overview page.</Text>
                            </Flex>
                        )}
                        
                    </Flex>
                    
                </Flex>
            </Flex>
            
        </Flex>
    );
};