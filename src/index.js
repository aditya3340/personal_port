import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/space-grotesk"

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const customTheme = extendTheme({
  colors: {
    background: {
      50: "#f0f5ff",
      100: "#dbeafe",
      200: "#2c3439"
      // Add more color values as needed
    },
    fontColor: {
      100: "#ced9bf"
    }
  },
  fonts: {
    body: "space grotesk, sans-serif !important",
    heading: "space grotesk, sans-serif !important"
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
