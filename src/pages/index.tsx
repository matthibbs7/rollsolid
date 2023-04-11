import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button, Flex, Text } from '@chakra-ui/react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TestWindow2 from '@/components/Window/TestWindow'
import Timer from '@/components/Modules/Timer/Timer'
import { BarsSpinner, CubeSpinner, FlagSpinner, GooSpinner, JellyfishSpinner, PulseSpinner, PushSpinner, SpiralSpinner } from 'react-spinners-kit';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Flex flexDir="column" height="100%">
      <Head>
        <title>Rollsolid</title>
        <meta name="description" content="Advanced Poker strategy and analysis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex position="fixed" top="45px" right="0" bottom="0" left="0" px={4} py={4} height='calc(100vh - 47px)'>
        <>
        <Button onClick={() => {}}>Window new</Button>
        {/* <Window id={1} render={render} setRender={setRender}>
          <Text>Select the two cards that you were dealt to view probabilities</Text>
        </Window> */}
        {/* <WindowDark id={2} render={render} setRender={setRender}>
          <Text>Select the two cards that you were dealt to view probabilities</Text>
        </WindowDark> */}
      
        <TestWindow2
          id={"rnd-1"}
          componentKey={"1"}
          title={"Notes"}
        >
          <Flex position="relative" width="100%" height="100%">
            <Text>Helo guy</Text>
            {/* <FlagSpinner size={35} loading={true} /> */}
            
          </Flex>
        </TestWindow2>
        <TestWindow2 
          id={"rnd-2"}
          componentKey={"2"}
          title={"Chart"}
          moduleSize={{width: '600', height: '350'}}
          x={800}
          y={100}
        >
          <Flex width="100%" height="100%" flexDirection="column">
            <Flex mt={5} mb={-5} mx={-5} width="110%" height="100%" flexDirection="column">
              <ResponsiveContainer width="100%" height="90%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
            
          </Flex>
          </Flex>
        </TestWindow2>
        <TestWindow2 
          id={"rnd-3"}
          componentKey={"3"}
          title="Probability Hand"
        >
          <Flex position="relative" width="100%" height="100%">
            <Text>Helo guys!</Text>
          </Flex>
        </TestWindow2>
        <TestWindow2 
          id={"rnd-4"}
          componentKey={"4"}
          moduleSize={{width: '250px', height: '100px'}}
          title="Timer"
        >
          <Timer />
        </TestWindow2>
        </>
      </Flex>
    </Flex>
  )
}
