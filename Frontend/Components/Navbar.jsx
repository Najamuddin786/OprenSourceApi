import { Box,Flex,Select,Spacer,Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { GiIndianPalace } from "react-icons/gi";
import { Link } from "react-router-dom";




export default function Navbar(){

   

    return <>
            <Flex zIndex={1100} position={'sticky'} top={'0px'} py='2vh' flexDir={{base:'column',sm:"row"}} fontWeight={600} align={'center'} color={'white'} px='10vw' bg='#282828'  justifyContent={'space-between'}>
                <Flex fontWeight={700} alignItems={'center'} fontSize={{base:"20px",sm:"30px"}}><GiNinjaHeroicStance/><Text>FREE API</Text></Flex>
                
                <Flex bg='#046a38' style={{backgroundImage: 'linear-gradient(0deg, #046a38 0%, #ff671f 100%)'}}
                        p='5px' borderRadius={'50px'} border={'1.5px solid white'} fontWeight={900} alignItems={'center'} fontSize={{base:"20px",sm:"30px"}}>
                    <GiIndianPalace/>
                </Flex>
                

            </Flex>
    </>
}