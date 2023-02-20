import React from "react";
import { Container, Pill, Percentage } from "./styled";
import { data } from "../../../../../src/data/data";

function Skill() {
  return (
    <Container>
      {data.skills.map((skill) => (
        <div key={skill.id}>
          <Pill>
            <img src={skill.img} alt={skill.tech} />

            <Percentage>{skill.level}</Percentage>
          </Pill>

          <p>{skill.tech}</p>
        </div>
      ))}
    </Container>
  );
}

export default Skill;
