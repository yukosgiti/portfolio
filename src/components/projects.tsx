import React from "react";
import { CvProjectCard } from "../atoms/cv-project-card";
import { Project, Tag } from "../types";

interface Props {}

const projects: Project[] = [
  {
    date: new Date(2014, 9, 1),
    title: "WIFM",
    description:
      "WIFM is my final project for my CET102 course. It's a concept website that allows ",
    tags: [Tag.HTML, Tag.CSS],
  },
];
export const Projects = ({}: Props) => {
  return (
    <React.Fragment>
      {projects.map((project, index) => {
        return (
          <React.Fragment key={index}>
            <CvProjectCard {...project} />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
