import { Container, Heading, theme, VStack } from "@chakra-ui/react";
import React from "react";
import { CvProjectCard } from "../atoms";
import { images, locale } from "../resources";
import { Project, ProjectPlace, ProjectType, Tag } from "../types";

interface Props {}

const projects: Project[] = [
  {
    type: ProjectType.School,
    place: ProjectPlace.Bogaizici,
    date: new Date(2015, 9, 1),
    title: "WIFM - Will It Fit Me?",
    description:
      "WIFM is my final project for my CET102 course. It's a concept website that allows one to set their body proportions to try out clothing online.",
    tags: [Tag.HTML, Tag.CSS, Tag.JavaScript],
    images: [images.wifmHomePath],
  },
  {
    type: ProjectType.School,
    place: ProjectPlace.Bogaizici,
    date: new Date(2017, 12, 15),
    title: "Chess Application",
    description:
      "This is my final project for the CET301 course. It's an online Chess client and server implementation that utilizes sockets.",
    tags: [Tag.DotNet, Tag.MSSQL],
    images: [images.chessHomePath],
  },
  {
    type: ProjectType.School,
    place: ProjectPlace.Bogaizici,
    date: new Date(2018, 5, 11),
    title: "8Read",
    description:
      "8Read is my final project for my CET322 course. It's a fullstack clone of reddit.com",
    tags: [Tag.DotNetCore, Tag.MSSQL, Tag.HTML, Tag.CSS, Tag.JavaScript],
    images: [images.eightReadContentPath],
  },
  {
    type: ProjectType.School,
    place: ProjectPlace.Bogaizici,
    date: new Date(2019, 5, 11),
    title: "Movie Suggestion",
    description:
      "This project was for my CMPE493 course. It creates movie suggestions given a set of liked movies. It calculates and compares the cosine similarity of liked movies and the imdb movies dataset based on their tf-idf scores. It isn't very pretty but it works :)",
    tags: [Tag.Python],
    images: [images.tfIdfPath],
  },
  {
    type: ProjectType.School,
    place: ProjectPlace.Bogaizici,
    date: new Date(2019, 5, 11),
    title: "Sakar Asistan",
    description:
      "Sakar Asistan is my final project for my CET472 course. It's an educational game that teaches properties of matter.",
    tags: [Tag.Unity3D],
    images: [images.sakarAsistanPath],
  },
  {
    type: ProjectType.School,
    place: ProjectPlace.ITU,
    date: new Date(2020, 5, 11),
    title: "ANPR System",
    description:
      "Automatic Number Plate Recognition (ANPR) system made with YoloV5 architecture.",

    tags: [Tag.Python, Tag.PyTorch, Tag.NumPy],
    images: [images.plateRecognitionPath],
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
