import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/Theme";
import type { GlobalProvider } from "@ladle/react";
import React from "react";

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
