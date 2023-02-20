import React from "react";
import { Container } from "./styled";
import { data } from "../../../src/data/data";

function HeadLine() {
  return (
    <Container>
      <p>{data.name} - {data.job} - Based in the {data.country}</p>
    </Container>
  );
}

export default HeadLine;
