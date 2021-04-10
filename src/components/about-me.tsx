import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import theme from "@chakra-ui/theme";
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { CvContactLink } from "../atoms";
import { data, images, locale } from "../resources";

interface Props {}

export const AboutMe = ({}: Props) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const dateOfBirth = new Date(data.user.birthday);

  const getAge = (birthDate: Date) =>
    Math.floor(
      (new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10
    );

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      py={theme.space[36]}
      backgroundColor={isDarkMode ? "#222224" : theme.colors.gray[200]}
    >
      <Box
        w={"25vmin"}
        h={"25vmin"}
        backgroundPosition="center"
        aria-label="Photo of me."
        backgroundSize="contain"
        mr={theme.space[10]}
        borderRadius={theme.radii.full}
        backgroundImage={`url(${images.ppPath})`}
      ></Box>
      <VStack alignItems={"flex-start"}>
        <Heading>{locale.aboutMe.hello}</Heading>
        <Text opacity={0.9}>
          {getAge(dateOfBirth) + " yaşında meraklı bir yazılımcıyım. "}
        </Text>
        <CvContactLink icon={FiLinkedin} src={data.user.links.linkedin} />
        <CvContactLink icon={FiGithub} src={data.user.links.github} />
        <CvContactLink icon={FiMail} src={data.user.links.email} copy />
      </VStack>
    </Flex>
  );
};
