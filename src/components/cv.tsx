import { useColorMode, Flex, theme } from "@chakra-ui/react";
import React from "react";
import { Header, AboutMe } from ".";

interface Props {}

export const Cv = ({}: Props) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <React.Fragment>
      <Flex
        textAlign="center"
        fontSize="xl"
        minH="100vh"
        direction="column"
        w={"100%"}
        backgroundColor={isDarkMode ? "#151619" : theme.colors.white}
      >
        <AboutMe />
        <Header />
      </Flex>
    </React.Fragment>
  );
};
