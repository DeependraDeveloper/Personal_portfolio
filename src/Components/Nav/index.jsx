import React from "react";
import { Container, Logo } from "./styled";
import image from "../../../src/assets/dp-logo.png";
import SociaMedia from "../SocailMedia";

function Nav() {
  return (
    <Container>
      <Logo src={image} alt="logo" />

      <SociaMedia />
    </Container>
  );
}

export default Nav;
