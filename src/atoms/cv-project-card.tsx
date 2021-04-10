import {
  Heading,
  HStack,
  Image,
  ScaleFade,
  Tag,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useInViewEffect } from "react-hook-inview";
import { Project } from "../types";

export const CvProjectCard = ({
  title,
  date,
  description,
  images,
  tags,
  place,
  type,
}: Project) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
      if (entry.isIntersecting) {
        setHasBeenVisible(true);
      }
    },
    { threshold: 0.5 }
  );
  const dateFormatter = new Intl.RelativeTimeFormat("en-US", {
    style: "long",
  });
  const timeAgo = dateFormatter.format(
    date.getFullYear() - new Date().getFullYear(),
    "years"
  );
  return (
    <React.Fragment>
      <ScaleFade ref={ref} initialScale={0.9} in={hasBeenVisible}>
        <VStack w={theme.sizes.full} justifyContent="start" alignItems="start">
          <Heading>{title}</Heading>
          <Text opacity={0.8} fontSize={theme.fontSizes.sm}>
            {place} - {timeAgo}
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
      </ScaleFade>
    </React.Fragment>
  );
};
