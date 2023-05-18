import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fontsource/aladin";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#f0f5ff",
      100: "#dbeafe",
      200: "#bfdbfe"
      // Add more color values as needed
    }
  },
  fonts: {
    body: "Aladin, sans-serif !important",
    heading: "Aladin, sans-serif !important"
    // Add more font styles as needed
  }
  // Add more customizations to the theme as needed
});

root.render(
  <ChakraProvider theme={customTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>
);
