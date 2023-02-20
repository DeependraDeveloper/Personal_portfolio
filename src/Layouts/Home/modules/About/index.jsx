import React from "react";
import { Container, LeftColumn, RightColumn } from "./styled";
import profile from "../../../../assets/profile.png";
import { data } from "../../../../../src/data/data";
import JonInfo from "./JobInfo";

function About() {
  return (
    <Container>
      <LeftColumn>
        {data.jobInfo.map((job) => (
          <JonInfo
            key={job.id}
            title={job.title}
            description={job.description}
          />
        ))}
      </LeftColumn>

      <img src={profile} alt="profile" />

      <RightColumn>
        {data.jobStats.map((job) => (
          <JonInfo
            key={job.id}
            title={job.title}
            description={job.description}
          />
        ))}
      </RightColumn>
    </Container>
  );
}

export default About;
