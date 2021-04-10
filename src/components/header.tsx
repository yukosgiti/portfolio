import { Flex, HStack, Text, theme, useColorMode } from "@chakra-ui/react";
import React from "react";
import { CvButton } from "../atoms";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { locale } from "../resources";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <Flex
      py={theme.space[5]}
      px={["10%", "25%"]}
      alignItems={"center"}
      justifyContent={"space-between"}
      backgroundColor={
        isDarkMode ? theme.colors.blackAlpha[500] : theme.colors.blackAlpha[300]
      }
    >
      <Text
        fontWeight={theme.fontWeights.semibold}
        fontSize={theme.fontSizes["2xl"]}
      >
        {locale.header.siteName}
      </Text>
      <HStack>
        <CvButton text={locale.header.about} />
        <CvButton text={locale.header.projects} />
        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>
    </Flex>
  );
};
