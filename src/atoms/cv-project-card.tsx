import { Flex, Heading, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components";
import { Project } from "../types";

export const CvProjectCard = ({
  title,
  date,
  description,
  images,
  tags,
}: Project) => {
  return (
    <React.Fragment>
      <VStack>
        <Heading>{title}</Heading>
        <HStack>
          {tags?.map((tag, index) => {
            return (
              <React.Fragment key={index}>
                <Tag>{tag}</Tag>
              </React.Fragment>
            );
          })}
        </HStack>
        <Text>{description}</Text>
      </VStack>
    </React.Fragment>
  );
};
