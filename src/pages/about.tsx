import Head from 'next/head'
import { Button, Flex, Text } from '@chakra-ui/react'
import Footer from '@/components/Footer/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>Rollsolid | About</title>
        <meta name="description" content="Advanced Poker strategy and analysis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column"  width="100%">
        <Flex height="720px" flexDirection="column" align="center">
          <Text mt={5} textAlign="center" fontSize="22pt" maxWidth="555px" fontFamily="AvenirNext-DemiBold">Explore your Poker games and simulate your strategy through the power of data!</Text>
          <Flex mt={5}>
            <Flex p={5} border="1.5px solid #353535" bg="black" align="center" height="280px" width="240px" flexDirection="column">
              <Text fontSize="20pt" fontFamily="AvenirNext-DemiBold">Basic</Text>
              <Text>$4.99/month</Text>
              <Text mt={3} fontFamily="AvenirNext-Italic">• Math Functions</Text>
              <Text fontFamily="AvenirNext-Italic">• All Charting</Text>
              <Text fontFamily="AvenirNext-Italic">• EQ Calculator</Text>
              <Text fontFamily="AvenirNext-Italic">• Probability Grid</Text>
              <Button _hover={{color: 'white'}} mt={5} borderRadius="0" color="black" bg="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)">Subscribe Now</Button>
            </Flex>
            <Flex border="1.5px solid #353535" ml={10} p={5} bg="black" align="center" height="280px" width="240px" flexDirection="column">
              <Text fontSize="20pt" fontFamily="AvenirNext-DemiBold">Advanced</Text>
              <Text>$9.99/month</Text>
              <Text mt={3} fontFamily="AvenirNext-Italic">• All Functions</Text>
              <Text fontFamily="AvenirNext-Italic">• All Charting</Text>
              <Text fontFamily="AvenirNext-Italic">• EQ Calculator</Text>
              <Text fontFamily="AvenirNext-Italic">• Probability Grid</Text>
              <Button _hover={{color: 'white'}} mt={5} borderRadius="0" color="black" bg="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)">Subscribe Now</Button>
            </Flex>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  )
}
