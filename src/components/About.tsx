"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 100);
          });
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <AboutSection id="about" ref={ref}>
      <AboutContent>
        <AboutHeadingContainer>
          <span>01.</span>
          <h1>About Me</h1>
          <div />
        </AboutHeadingContainer>
        <AboutContentContainer>
          <AboutContentSubContainer>
            <p className="paragraph">
              Hello! My name is Alex and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom themes — turns out hacking
              together HTML & CSS taught me a lot about design and structure.
            </p>
            <p className="paragraph">
              Fast-forward to today, and Ive had the privilege of working at an
              <span> advertising agency</span> , a <span> start-up</span>, a
              <span> huge corporation</span>, and a
              <span> student-led design studio</span> . My main focus these days
              is building accessible, inclusive products and digital
              experiences.
            </p>
            <p className="paragraph">Here are a few things I value:</p>
            <AboutContentValuesGrid>
              <GridItem>
                <MapPin color="#64ffda" size={16} />
                <h1>San Francisco, CA</h1>
              </GridItem>
              <GridItem>
                <MapPin color="#64ffda" size={16} />
                <h1>San Francisco, CA</h1>
              </GridItem>
              <GridItem>
                <MapPin color="#64ffda" size={16} />
                <h1>San Francisco, CA</h1>
              </GridItem>
              <GridItem>
                <MapPin color="#64ffda" size={16} />
                <h1>San Francisco, CA</h1>
              </GridItem>
            </AboutContentValuesGrid>
          </AboutContentSubContainer>
          {/* <AboutContentImageContainer></AboutContentImageContainer> */}
        </AboutContentContainer>
      </AboutContent>
    </AboutSection>
  );
}

export const AboutSection = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 40px;
  }
`;

export const AboutHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    color: #64ffda;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  h1 {
    color: #ccd6f6;
    font-size: 36px;
    font-weight: 700;
    font-family: var(--font-bricolage-grotesque);
    line-height: 1;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  div {
    width: 30%;
    height: 1px;
    background-color: #23355499;
  }
`;

export const AboutContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutContentSubContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .paragraph {
    color: #8892b0;
    font-size: 17px;
    font-family: var(--font-bricolage-grotesque);

    span {
      color: #64ffda;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutContentImageContainer = styled.div`
  width: 40%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #64ffda;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutContentValuesGrid = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 14px;
    color: #e5e7eb;
  }
`;
