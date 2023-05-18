import {
  Box,
  Flex,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useBreakpointValue,
  useDisclosure,
  Link
} from "@chakra-ui/react";
import "@fontsource/aladin";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRef } from "react";

const NavItems = [
  {
    text: "About",
    link: "/About"
  },
  { text: "Projects", link: "/Projects" },
  {
    text: "Contact",
    link: "/Contact"
  }
];

function WithSubnavigation() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { isOpen, onToggle } = useDisclosure();

  const fontSize = useBreakpointValue({ base: "2xl" });

  return (
    <Box fontSize={fontSize}>
      <Flex justify="space-between" p={2} alignItems="center">
        <Link href="/">
          <Text fontSize={fontSize} fontWeight="bold" fontFamily="Aladin">
            Aditya K
          </Text>
        </Link>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          display={{
            sm: "block",
            md: "none"
          }}
        />

        <Flex display={{ base: "none", md: "flex" }}>
          {NavItems.map((item, index) => {
            return (
              <Link key={index} href={item.link}>
                <Text fontSize={fontSize} mr="25px">
                  {item.text}
                </Text>
              </Link>
            );
          })}
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onToggle}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            {NavItems.map((item, index) => {
              return (
                <Box key={index} textAlign="center">
                  <Link href={item.link}>
                    <Text fontSize={"xl"} p={3}>
                      {item.text}
                    </Text>
                  </Link>
                </Box>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default WithSubnavigation;
