import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Object from "./Object";

export default function Flipkard() {
  const [copySuccess, setCopySuccess] = useState(""); 

  // Function to handle copying text
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopySuccess("Copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000); 
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <Flex  flexDir={"column"} gap={5} >
        <Box fontWeight={700} textAlign={"center"} w="full">
          <Text>This is a Flipkart API that lets you create an e-commerce website</Text>
        </Box>
        <Box fontWeight={700} textAlign={"center"} w="full">
          <Text>Flipkard API Documentation</Text>
        </Box>
        <Flex  flexDir={{base:"column",lg:'row'}} gap={"10px"} alignItems="center" bg='white' px={'10px'} py='10px' borderRadius={'md'} justifyContent={'space-around'}>
          <Text color={'black'}>Get</Text>
          <Text color={"green"}>https://freeapi-vril.onrender.com/flipkard/products</Text>
          <Button onClick={() => copyToClipboard("https://freeapi-vril.onrender.com/flipkard/products")}>
            Copy
          </Button>
        </Flex>
        {/* Optional success message */}
        {copySuccess && <Text color="green" mt={2}>{copySuccess}</Text>}
        <Box bg='orange' p={'2'}>Flipkard</Box>
        <Object/>
      </Flex>
    </>
  );
}
