import React from "react";
import Contact from "../../Components/Contact";
import HeadLine from "../../Components/Headline";
import Nav from "../../Components/Nav";
import Section from "../../Components/Section";
import About from "./modules/About";
import Client from "./modules/Clients";
import Experince from "./modules/Expriences";
import Project from "./modules/Projects";
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

      <Section heading="Skills">
        <Skill/>
      </Section>

      <Section heading="Education & Experience">
        <Experince />
      </Section>

      <Section heading="Projects">
          <Project />
      </Section>

      <Section heading="contact">
        <Contact/>
      </Section>
    </Container>
  );
}

export default Home;
