import dynamic from "next/dynamic";
import Container from "../components/Container";
import Hero from "../components/Hero";

const Projects = dynamic(() => import("../components/Projects"));

export default function Home() {
  return (
    <Container>
      <Hero />
      <Projects />
    </Container>
  );
}
