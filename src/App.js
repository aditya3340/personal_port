import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import WithSubnavigation from "./Navbar";
import About from "./About";
import { Box, useTheme } from "@chakra-ui/react";
import Projects from "./Projects";
import Skills from "./Skills";


export default function App() {
  const theme = useTheme()
  return (
    <Box bgColor={theme.colors.background[200]} color={theme.colors.fontColor[100]}>
    <Box maxW={{ base: "90%", lg: "80%" }} margin="auto" >
      <WithSubnavigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element = {<Projects/>} />
          <Route path = "/Skill" element = {<Skills/>} />
        </Routes>
      </BrowserRouter>
    </Box>
    </Box>
  );
}
