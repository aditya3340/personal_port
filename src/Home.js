import {
  Box,
  Flex,
  Heading,
  ScaleFade,
  HStack,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import "@fontsource/aladin";
import bg from "./assests/bg.jpg";

import { useState, useEffect } from "react";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useTheme } from "@emotion/react";

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
        borderRadius={"10px"}
      >
        <Flex h={"100%"} justify={"start"} alignItems={"center"} ml="20px">
          <Box bgColor={"blackAlpha.700"} pl={4} pb={4} borderRadius={5}>
            <ScaleFade initialScale={0.9} in={showText}>
              <Heading
                letterSpacing={"5px"}
                fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "7xl" }}
              >
                {" "}
                ADITYA KUMAR 🫡
              </Heading>
              <Text fontSize={"xl"}>Frontend Engineer</Text>
              <Link href="https://drive.google.com/file/d/1SECo-s3p7roaDd__BiwEfbpESQGDgDxF/view?usp=sharing">
                <Button
                  paddingInline={5}
                  borderRadius={25}
                  mt={2}
                  color={theme.colors.background[200]}
                  bgColor={theme.colors.fontColor[100]}
                >
                  <Text>Resume</Text>
                </Button>
              </Link>
            </ScaleFade>
          </Box>
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
