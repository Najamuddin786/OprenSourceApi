import { Box,Flex,Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Footer(){

    let array=[
        {label:"GitHub",link:"https://www.youtube.com/",icon:<FaGithub />},
        {label:"Linkedin",link:"https://linkedin.com/in/md-najamuddin-77a100234",icon:<FaLinkedin />}
    ]

    return <>
            <Flex py='3vh' flexDir={{base:'column',sm:"row"}} fontWeight={600} align={'center'} color={'white'} px='10vw' bg='#282828'  justifyContent={'space-between'}>
                <Flex gap={5}>
                    {array.map((e,i)=>{
                        return <Link to={e.link}><Flex  gap={'5px'} alignItems={'center'}><Text>{e.icon}</Text><Text>{e.label}</Text></Flex></Link>
                    })}

                </Flex>
                <Text>©2024 . Powered by Niva</Text>

            </Flex>
    </>
}