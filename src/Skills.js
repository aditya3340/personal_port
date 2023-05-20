import React from 'react'
import { Box, Flex, Text, ScaleFade, SimpleGrid } from "@chakra-ui/react";


import bg from "./assests/bg.jpg";
import { useState, useEffect } from "react";

const skills = [
    {
        icon: "",
        name: "HTML5",
    },
    
]

const Skills = () => {

    const [showText, setShowText] = useState(false);

    useEffect(() => {
      setShowText(true);
    }, []);

  return (
    <Box height={"100vh"}>
      <Box
        backgroundImage={bg}
        backgroundSize="cover"
        backgroundPosition="center"
        width="100%"
        height="85%"
        paddingBlock={{ sm: "50px" }}
        borderRadius={10}
      >
        <Flex h={"100%"} justify={"center"} alignItems={"center"}>
          <ScaleFade initialScale={1.9} in={showText}>
            <SimpleGrid>

            </SimpleGrid>
          </ScaleFade>
        </Flex>
      </Box>
    </Box>
  )
}

export default Skills