import { Box, Flex, Heading, ScaleFade, HStack } from "@chakra-ui/react";
import "@fontsource/aladin";
import bg from "./assests/bg.jpg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

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

export default function Home() {
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
        borderRadius={"10px"}
      >
        <Flex h={"100%"} justify={"start"} alignItems={"center"} ml="40px">
          <Box bgColor={"#2b2b2b"}>
            <ScaleFade initialScale={0.9} in={showText}>
              <Heading
                letterSpacing={"5px"}
                fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
              >
                {" "}
                ADITYA <br /> KUMAR
              </Heading>
            </ScaleFade>
          </Box>
        </Flex>
      </Box>
      <HStack justify={"center"}>
        {socials.map((item) => {
          return (
            <Box key={item.text}
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
}
