import { Box,Flex,Text,Select } from "@chakra-ui/react";
import Flipkard from "../Components/Flipkard";

export default function Home(){

    return <>
            <Flex gap={'15px'} color={'white'} bg='black' px='10vw' py='20px' justifyContent={'space-between'} flexDir={'column'}>
                    <Text fontWeight={600} color='white' bg='#046a38'
style={{backgroundImage: 'linear-gradient(0deg, #046a38 0%, #ff671f 100%)'}} textAlign={'center'} p='5px' borderRadius={'md'}  ><h1>Real REST API which is ready to handle your HTTP requests 24/7 for free. Can be used for your demo projects, testing, learning or even educating someone else.</h1></Text>
                    <Flex justifyContent={'space-between'}>
                    <Flex >
                        <Select bg='white' color={'black'}>
                            <option value="">Flipkard Api</option>
                            <option value="">Money Api</option>
                            <option value="">Movie Api</option>
                            <option value="">Hero Api</option>
                        </Select>

                    </Flex>
                    <Flex p={'10px'} bg='#282828'  borderRadius={'md'}>
                        <Flipkard/>
                    </Flex>
                    </Flex>
            </Flex>
    </>
}