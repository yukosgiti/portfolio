import {
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Project } from "../types";

export const CvProjectCard = ({
  title,
  date,
  description,
  images,
  tags,
}: Project) => {
  const dateFormatter = new Intl.RelativeTimeFormat("tr-TR", {
    style: "narrow",
  });
  const timeAgo = dateFormatter.format(
    date.getFullYear() - new Date().getFullYear(),
    "years"
  );
  return (
    <React.Fragment>
      <VStack w={theme.sizes.full} justifyContent="start" alignItems="start">
        <Heading>{title}</Heading>
        <Text opacity={0.8} fontSize={theme.fontSizes.sm}>
          {timeAgo}
        </Text>
        <HStack>
          {tags?.map((tag, index) => {
            return (
              <React.Fragment key={index}>
                <Tag>{tag}</Tag>
              </React.Fragment>
            );
          })}
        </HStack>
        <Text textAlign="start">{description}</Text>
        <HStack>
          {images?.map((src, index) => {
            return (
              <React.Fragment key={index}>
                <Image src={src} />
              </React.Fragment>
            );
          })}
        </HStack>
      </VStack>
    </React.Fragment>
  );
};
