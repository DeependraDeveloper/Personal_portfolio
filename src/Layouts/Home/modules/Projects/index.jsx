import React from "react";
import { data } from "../../../../data/data";
import { Container,Image, ProjectContainer, Category, Title } from "./styled";

function Project() {
  return (
    <Container>
      {data.projects.map((project) => (
        <ProjectContainer>
          <Image src={project.image} alt={project.title} />
          <Category>{project.category}</Category>
          <Title>{project.title}</Title>
        </ProjectContainer>
      ))}
    </Container>
  );
}

export default Project;
