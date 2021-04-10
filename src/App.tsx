import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Cv } from "./components";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Cv />
    </ChakraProvider>
  );
};
