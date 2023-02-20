import React from "react";
import HeadLine from "../../Components/Headline";
import Nav from "../../Components/Nav";
import Section from "../../Components/Section";
import About from "./modules/About";
import Client from "./modules/Clients";
import Skill from "./modules/Skills";
import { Container } from "./styled";

function Home() {
  return (
    <Container>
      <Nav />
      <HeadLine />

      <Section><About/></Section>

      <Section heading="Clients">
        <Client />
      </Section>

      <Section heading="skills">
        <Skill/>
      </Section>

      <Section heading="experience"></Section>

      <Section heading="projects"></Section>

      <Section heading="contact"></Section>
    </Container>
  );
}

export default Home;
