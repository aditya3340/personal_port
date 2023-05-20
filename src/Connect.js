import React from "react";

import {
  Box,
  Flex,
  ScaleFade,
  useTheme,
  HStack,
  Link,
  Input,
  Button,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

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

const Connect = () => {
  const [showText, setShowText] = useState(false);
  const theme = useTheme();

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
            <Box
              bgColor={"blackAlpha.800"}
              maxW={{ base: "80%", sm: "70%", lg: "50%" }}
              margin={"auto"}
              padding={10}
              textAlign={"center"}
              borderRadius={10}
            >
              <Heading mb={4}>SAY HELLO 😶‍🌫️ ?</Heading>
              <Input placeholder="Name" type="text" mb={4} />

              <Input placeholder="Email" type="text" mb={4} />

              <Input
                placeholder="Any message or suggestion for me? "
                type="text"
                width={"100%"}
                height={"150px"}
                mb={4}
              />

              <Button
                bgColor={theme.colors.fontColor[100]}
                color={theme.colors.background[200]}
                width={"100%"}
              >
                CONNECT
              </Button>
            </Box>
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

export default Connect;
