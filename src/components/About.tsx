"use client";

import theme from "@/style/theme/theme";
import { Briefcase, Globe, GraduationCap, MapPin } from "lucide-react";
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
              I'm a passionate Frontend Developer who enjoys creating modern,
              responsive, and user-friendly web applications. I specialize in
              turning <span>ideas</span> and <span>designs</span> into
              <span>interactive digital experiences </span>
              using technologies like HTML, CSS, JavaScript, React, and modern
              frontend tools. I focus on writing clean, maintainable code while
              ensuring <span>performance, accessibility,</span> and a{" "}
              <span>seamless user experience</span> across all devices.
            </p>
            <p className="paragraph">
              I continuously explore new technologies and best practices to
              improve my skills and build better products. My goal is to develop
              <span> web solutions</span> that not only look great but also
              provide <span>real value to users</span> through intuitive and
              engaging interfaces.
            </p>
            <p className="paragraph" style={{marginTop: '20px'}}>Here are a few things I value:</p>
            <AboutContentValuesGrid>
              <GridItem>
                <MapPin color="#64ffda" size={16} />
                <h1>Ratlam, Madhya Pradesh</h1>
              </GridItem>
              <GridItem>
                <Briefcase color="#64ffda" size={16} />
                <h1>Available for Hire</h1>
              </GridItem>
              <GridItem>
                <GraduationCap color="#64ffda" size={16} />
                <h1>B.E. Computer Science</h1>
              </GridItem>
              <GridItem>
                <Globe color="#64ffda" size={16} />
                <h1>Remote Ready</h1>
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
  gap: 64px;
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
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  h1 {
    color: ${theme.colors.text.heading};
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
    color: ${theme.colors.text.description};
    font-size: 17px;
    font-family: var(--font-bricolage-grotesque);

    span {
      color: ${theme.colors.primary};
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
  border: 1px solid ${theme.colors.primary};
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
  gap: 10px;

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
    color: ${theme.colors.text.heading};
  }
`;
