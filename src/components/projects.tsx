import { Container, Heading, theme, VStack } from "@chakra-ui/react";
import React from "react";
import { CvProjectCard } from "../atoms";
import { images, locale } from "../resources";
import { Project, ProjectType, Tag } from "../types";

interface Props {}

const projects: Project[] = [
  {
    type: ProjectType.School,
    date: new Date(2015, 9, 1),
    title: "WIFM - Will It Fit Me?",
    description:
      "WIFM is my final project for my CET102 course. It's a concept website that allows one to set their body proportions to try out clothing online.",
    tags: [Tag.HTML, Tag.CSS, Tag.JavaScript],
    images: [images.wifmHomePath],
  },
  {
    type: ProjectType.School,
    date: new Date(2017, 12, 15),
    title: "Chess Application",
    description:
      "This is my final project for the CET301 course. It's an online Chess application that utilises sockets.",
    tags: [Tag.DotNet],
    images: [images.chessHomePath],
  },
  {
    type: ProjectType.School,
    date: new Date(2018, 5, 11),
    title: "8Read",
    description:
      "8Read is my final project for my CET322 course. It's a fullstack clone of reddit.com",
    tags: [Tag.DotNetCore, Tag.MSSQL, Tag.HTML, Tag.CSS, Tag.JavaScript],
    images: [images.eightReadContentPath],
  },
];
export const Projects = ({}: Props) => {
  return (
    <React.Fragment>
      <VStack>
        <Heading my={theme.space[12]}>{locale.header.projects}</Heading>
        <VStack spacing={theme.space[12]}>
          {projects
            .sort((a, b) => -a.date.getTime() + b.date.getTime())
            .map((project, index) => {
              return (
                <React.Fragment key={index}>
                  <Container>
                    <CvProjectCard {...project} />
                  </Container>
                </React.Fragment>
              );
            })}
        </VStack>
      </VStack>
    </React.Fragment>
  );
};
