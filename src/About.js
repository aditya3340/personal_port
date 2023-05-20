import { Box, Flex, Text, ScaleFade } from "@chakra-ui/react";

import bg from "./assests/bg.jpg";
import { useState, useEffect } from "react";

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
    </Box>
  );
}
