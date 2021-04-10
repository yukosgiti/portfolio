import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
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
      flexDir={["column", "row"]}
      py={[theme.space[16], theme.space[36]]}
      backgroundColor={isDarkMode ? "#222224" : theme.colors.gray[200]}
    >
      <Image
        w={["50vmin", "30vmin"]}
        h={["50vmin", "30vmin"]}
        aria-label="Photo of me."
        src={images.ppPath}
        borderRadius={theme.radii.full}
        mx={[0, theme.space[10]]}
      />
      <VStack alignItems={"flex-start"}>
        <Heading
          fontSize={[
            theme.fontSizes["2xl"],
            theme.fontSizes["3xl"],
            theme.fontSizes["4xl"],
          ]}
        >
          {locale.aboutMe.hello}
        </Heading>
        <Text opacity={0.9} fontSize={[theme.fontSizes.md, theme.fontSizes.lg]}>
          {getAge(dateOfBirth) + " yaşında meraklı bir yazılımcıyım. "}
        </Text>
        <CvContactLink icon={FiLinkedin} src={data.user.links.linkedin} />
        <CvContactLink icon={FiGithub} src={data.user.links.github} />
        <CvContactLink icon={FiMail} src={data.user.links.email} copy />
      </VStack>
    </Flex>
  );
};
