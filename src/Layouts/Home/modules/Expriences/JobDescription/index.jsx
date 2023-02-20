import React from "react";
import { Container } from "./styled";

function JobDescription({ designation, company }) {
  return (
    <Container>
      <h2>{designation}</h2>
      <p>{company}</p>
    </Container>
  );
}

export default JobDescription;
