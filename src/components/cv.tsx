import { Flex, theme, useColorMode } from "@chakra-ui/react";
import React from "react";
import { AboutMe, Header, Projects } from ".";

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
        <Header />
        <AboutMe />
        <Projects />
      </Flex>
    </React.Fragment>
  );
};
