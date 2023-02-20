import React from "react";
import { data } from "../../../../data/data";
import { Container } from "./styled";

function Client() {
  return (
    <Container>
      {data.clients.map((client) => (
        <img key={client.id} src={client.img} alt={client.company} />
      ))}
    </Container>
  );
}

export default Client;
