import React from "react";
import { Box, Flex, Text, ScaleFade, SimpleGrid, Icon, IconButton, useTheme, HStack, Link } from "@chakra-ui/react";
import {AiFillHtml5, AiFillGithub, 
  AiFillLinkedin,
  AiFillTwitterCircle,} from "react-icons/ai"
import {FaCss3Alt, FaReact, FaJava} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {TbBrandRedux} from "react-icons/tb"
import {SiChakraui,  SiMongodb} from "react-icons/si"
import {FiFigma} from "react-icons/fi"

import bg from "./assests/bg.jpg";
import { useState, useEffect } from "react";

const socials = [
  {
    text: "Github",
    link: "https://github.com/aditya3340",
    icon: <AiFillGithub size={35} />,
  },
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/in/aditya-kumar-ab81a6222/",
    icon: <AiFillLinkedin size={35} />,
  },
  {
    text: "Twitter",
    link: "https://twitter.com/Aditya_k3340",
    icon: <AiFillTwitterCircle size={35} />,
  },
];

const skills = [
  {
    icon: <AiFillHtml5 size = {70} />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt size={70}/>,
    name: "CSS",
  },
  {
    icon: <IoLogoJavascript size={70}/>,
    name: "JAVASCRIPT",
  },
  {
    icon: <FaReact size={70}/>,
    name: "REACT",
  },
  {
    icon: <TbBrandRedux size={70}/>,
    name: "REDUX",
  },
  {
    icon: <AiFillGithub size={70}/>,
    name: "GIT",
  },
  {
    icon: <SiChakraui size={70}/>,
    name: "CHAKRA UI",
  },
  {
    icon : <FaJava size={70}/>,
    name : "JAVA",
  },
  {
    icon: <FiFigma size={70}/>,
    name: "FIGMA",
  },
  {
    icon: <SiMongodb size={70}/>,
    name: "MONGO DB",
  },
];

const Skills = () => {
  const [showText, setShowText] = useState(false);
  const theme = useTheme()

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
            <SimpleGrid columns={{ base: 3, sm: 4}} gap={{sm: 4, md: 8, lg: 10 }}>
              {
                skills.map((skill) => {
                  return (
                    <Box key={skill.name} textAlign={"center"} >
                      <IconButton icon={skill.icon} size={"xl"} bgColor={"blackAlpha.700"} p = {2}
                        transition="transform 0.3s"
                        _hover={{
                          color: theme.colors.background[200],
                          bgColor: theme.colors.fontColor[100],
                          transform: "translateY(-5px)",
                        }}
                      >
                          
                        </IconButton>
                        <Text>{skill.name}</Text> 
                    </Box> 
                  )
                })
              }
            </SimpleGrid>
          </ScaleFade>
        </Flex>
      </Box>
      <HStack justify={"center"}>
        {socials.map((item) => {
          return (
            <Box
              key={item.text}
              p={1}
              transition="transform 0.3s"
              _hover={{
                transform: "translateY(-5px)",
              }}
            >
              <Link to={item.link}>{item.icon}</Link>
            </Box>
          );
        })}
      </HStack>
    </Box>
  );
};

export default Skills;
