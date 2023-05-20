import React from "react";
import {
  Box,
  Flex,
  Text,
  ScaleFade,
  SimpleGrid,
  HStack,
  Button,
  Heading,
  Stack,
  VStack,
  Link,
} from "@chakra-ui/react";
import bg from "./assests/bg.jpg";
import { useState, useEffect } from "react";

import { useTheme } from "@emotion/react";

const projects = [
  {
    id: 1,
    title: "ECOMMERCE STORE",
    description:
      "Our ecommerce store, built with React and Redux, offers a seamless shopping experience with a personalized home page and user-friendly cart page.",
    liveLink: "https://lighthearted-cannoli-4b949c.netlify.app/",
    githubLink: "https://github.com/aditya3340/ecommerce-exp",
  },
  {
    id: 2,
    title: "HACKATHON SUBMISSION APP",
    description:
      "A Hackathon submission Application made using React, Redux, and Chakra UI.",
    liveLink: "https://papaya-sfogliatella-3f5daa.netlify.app/",
    githubLink: "https://github.com/aditya3340/ai_planet",
  },
  {
    id: 3,
    title: "FLATHEAD CLONE",
    description:
      "A Flathead shoes ecommerce website clone created using React, Redux, and Chakra UI.",
    liveLink: "https://inquisitive-pithivier-879983.netlify.app/",
    githubLink: "https://github.com/aditya3340/Flatheads-Clone",
  },
  {
    id: 4,
    title: "TENZIES",
    description:
      "Wanna play something fun? Roll the dice till you get the same number on all dice. Have fun!",
    liveLink: "https://silver-custard-2d676d.netlify.app/",
    githubLink: "https://github.com/aditya3340/Tenzies",
  },

  {
    id: 5,
    title: "SaaS Landing Page",
    description:
      "Transform your business with our modern and responsive SaaS landing page, built using React.",
    liveLink: "https://aquamarine-griffin-973635.netlify.app/",
    githubLink: "https://github.com/aditya3340/SaaS-Landing-Page",
  },
];

const Projects = () => {
  const theme = useTheme();
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
        overflow={"auto"}
        overflowY={"scroll"}
        scrollBehavior={"smooth"}
        css={{
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
        }}
      >
        <Flex
          h={"100%"}
          justify={"center"}
          alignItems={"center"}
          height={"auto"}
        >
          <Stack>
            <Heading>PROJECTS</Heading>
            <ScaleFade initialScale={1.9} in={showText}>
              <Box>
                <SimpleGrid
                  columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
                  gap={5}
                >
                  {projects.map((project) => {
                    return (
                      <VStack
                        bgColor={"blackAlpha.800"}
                        p={5}
                        width={{ base: "300px", sm: "350px" }}
                        justify={"space-between"}
                        alignItems={"start"}
                        borderRadius={5}
                        key={project.id}
                      >
                        <Heading>{project.title}</Heading>
                        <Text
                          overflow="hidden"
                          display="-webkit-box"
                          style={{
                            WebkitLineClamp: 3, // Number of lines to show before truncating
                            WebkitBoxOrient: "vertical",
                            maxHeight: "3em", // Height of 3 lines
                            lineHeight: "1em",
                          }}
                        >
                          {project.description}
                        </Text>
                        <HStack mt={3}>
                          <Link href={project.liveLink}>
                            <Button
                              transition="transform 0.3s"
                              bgColor={theme.colors.background[200]}
                              color={theme.colors.fontColor[100]}
                              _hover={{
                                color: theme.colors.background[200],
                                bgColor: theme.colors.fontColor[100],
                                transform: "translateY(-5px)",
                              }}
                            >
                              <Text>LIVE</Text>
                            </Button>
                          </Link>
                          <Link href={project.githubLink}>
                            <Button
                              transition="transform 0.3s"
                              bgColor={theme.colors.background[200]}
                              color={theme.colors.fontColor[100]}
                              _hover={{
                                color: theme.colors.background[200],
                                bgColor: theme.colors.fontColor[100],
                                transform: "translateY(-5px)",
                              }}
                            >
                              <Text>GITHUB</Text>
                            </Button>
                          </Link>
                        </HStack>
                      </VStack>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </ScaleFade>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
