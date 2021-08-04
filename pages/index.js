import { useRef } from "react";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { NextSeo } from "next-seo";
const Projects = dynamic(() => import("../components/projects"));
const Contact = dynamic(() => import("../components/contact"));

export default function Home() {
  const containerRef = useRef(null);

  return (
    <Layout>
      <NextSeo title="🏡" />

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <section
          data-scroll-container
          className="w-full h-full"
          ref={containerRef}
        >
          <div data-scroll-section className="w-full h-full">
            <Hero />
            <Projects />
            <Contact />
          </div>
        </section>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
