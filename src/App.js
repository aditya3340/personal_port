import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import WithSubnavigation from "./Navbar";
import About from "./About";
import { Box } from "@chakra-ui/react";

export default function App() {
  return (
    <Box maxW={{ base: "100%", lg: "80%" }} margin="auto" bgColor="blue">
      <WithSubnavigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
