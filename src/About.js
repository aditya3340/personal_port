import { Box, Flex, Text, ScaleFade, HStack, Link } from "@chakra-ui/react";

import bg from "./assests/bg.jpg";
import { useState, useEffect } from "react";
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

export default function About() {
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
            <Box
              bgColor={"blackAlpha.800"}
              maxW={{ base: "80%", sm: "70%", lg: "50%" }}
              margin={"auto"}
            >
              <Text fontSize={{ base: "xl", md: "2xl" }} textAlign={"center"}>
                Hey there✨👋, I'm Aditya Kumar!! <br /> I have a passion for
                coding and love to create clean, function, user-friendly
                websites. I have worked on various projects which make use of
                languages such as HTML5, CSS3, JavaScript, React, Java, etc. I
                strive to create websites that are intuitive and easy to
                navigate. When I'm not coding, I enjoy Sketching/drawing✨.
              </Text>
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
}
