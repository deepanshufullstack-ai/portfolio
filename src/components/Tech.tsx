"use client";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiNextjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";

import { SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import styled from "styled-components";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { useEffect, useRef } from "react";

const techs = [
  {
    name: "HTML",
    description:
      "The standard markup language used to structure and organize content on web pages.",
    icon: <FaHtml5 color="#64ffda" size={22} />,
  },
  {
    name: "CSS",
    description:
      "A stylesheet language used to design, style, and create responsive layouts for web applications.",
    icon: <FaCss3Alt color="#64ffda" size={22} />,
  },
  {
    name: "JavaScript",
    description:
      "A versatile programming language that powers interactive and dynamic behavior in web applications.",
    icon: <DiJavascript color="#64ffda" size={22} />,
  },
  {
    name: "React.js",
    description:
      "A popular JavaScript library for building fast, component-based user interfaces and single-page applications.",
    icon: <FaReact  color="#64ffda" size={22} />,
  },
  {
    name: "Next.js",
    description:
      "A React framework that provides server-side rendering, static site generation, routing, and full-stack capabilities.",
    icon: <RiNextjsFill color="#64ffda" size={22} />,
  },
  {
    name: "Nest.js",
    description:
      "A progressive Node.js framework built with TypeScript for creating scalable, maintainable, and enterprise-grade backend applications.",
    icon: <SiNestjs color="#64ffda" size={22} />,
  },
  {
    name: "MongoDB",
    description:
      "A NoSQL document database that stores data in flexible JSON-like documents for scalable applications.",
    icon: <DiMongodb color="#64ffda" size={22} />,
  },
  {
    name: "PostgreSQL",
    description:
      "A powerful open-source relational database known for reliability, performance, and advanced SQL features.",
    icon: <BiLogoPostgresql color="#64ffda" size={22} />,
  },
];

export default function Tech() {
  
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
    <TechSection id="tech" ref={ref}> 
      <TechContent>
        <TechHeadingContainer>
          <span>03.</span>
          <h1>My Tech Stack</h1>
          <div />
        </TechHeadingContainer>
        <TechGrid>
          {techs.map((tech, i) => (
            <TechItem key={i}>
              <div className="iconContainer">{tech.icon}</div>
              <h2 className="techName">{tech.name}</h2>
              <p className="description">{tech.description}</p>
            </TechItem>
          ))}
        </TechGrid>
      </TechContent>
    </TechSection>
  );
}


export const TechSection = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TechContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 40px;
  }
`;

export const TechHeadingContainer = styled.div`
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

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border: 1px solid #23355499;
  border-radius: 4px;
  background-color: #0d1c37;
  transition:
    transform 0.3s ease,
    border 0.3s ease;

  .iconContainer {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #153446;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin-bottom: 16px;
  }

  .techName {
    color: #ccd6f6;
    font-size: 18px;
    font-family: var(--font - bricolage - grotesque);
    font-weight: 600;
    line-height: 1;
    transition: color 0.3s ease;
  }

  .description {
    color: #8892b0;
    font-size: 14px;
    line-height: 1.5;
  }

  &:hover {
    border: 1px solid #64ffda;
    transform: translateY(-4px);

    .iconContainer {
      background-color: #64ffdb54;
    }

    .techName {
      color: #64ffda;
    }
  }
`;