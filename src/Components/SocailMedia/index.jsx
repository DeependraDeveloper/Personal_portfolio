import React from "react";
import { Facebook, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Container } from "./styled";

function SociaMedia() {
  return (
    <Container>
      <a href="" target="_blank">
        <Facebook />
      </a>

      <a href="" target="_blank">
        <Instagram />
      </a>

      <a href="" target="_blank">
        <LinkedIn />
      </a>

      <a href="https://github.com/deepak685" target="_blank">
        <GitHub />
      </a>
    </Container>
  );
}

export default SociaMedia;
