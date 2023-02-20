import React from "react";
import { data } from "../../../../data/data";
import JobDescription from "./JobDescription";
import { Container, Column, Title } from "./styled";

function Experince() {
  return (
    <Container>
      <Column>
        <Title>2023 - Present</Title>

        {data.jobDescriptions
          .filter((job) => job.year === 2024 || job.year === 2023)
          .map((item) => (
            <JobDescription
              key={item.id}
              designation={item.designation}
              company={item.company}
            />
          ))}
      </Column>

      <Column>
        <Title> 2022 </Title>
        {data.jobDescriptions
          .filter(
            (job) =>  job.year === 2022
          )
          .map((item) => (
            <JobDescription
              designation={item.designation}
              company={item.company}
              key={item.id}
            />
          ))}
      </Column>

      <Column>
        <Title>2021  </Title>
        {data.jobDescriptions
          .filter(
            (job) => job.year === 2021 
          )
          .map((item) => (
            <JobDescription
              designation={item.designation}
              company={item.company}
              key={item.id}
            />
          ))}
      </Column>
    </Container>
  );
}

export default Experince;
