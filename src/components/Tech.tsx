
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";

import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import styled from "styled-components";

const techs = [
  {
    name: "JavaScript",
    description:
      "A programming language that is one of the core technologies of the web.",
    icon: <RiJavascriptLine color="#64ffda" size={22} />,
  },
  {
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript.",
    icon: <SiTypescript color="#64ffda" size={22} />,
  },
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces.",
    icon: <FaReact color="#64ffda" size={22} />,
  },
  {
    name: "Next.js",
    description:
      "A React framework for building server-side rendered applications.",
    icon: <RiNextjsLine color="#64ffda" size={22} />,
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: <FaNodeJs color="#64ffda" size={22} />,
  },
  {
    name: "Nest.js",
    description:
      "A progressive Node.js framework for building efficient and scalable server-side applications.",
    icon: <SiNestjs color="#64ffda" size={22} />,
  },
  {
    name: "MongoDB",
    description:
      "A general-purpose, document-based, distributed database program.",
    icon: <SiMongodb color="#64ffda" size={22} />,
  },
  {
    name: "PostgreSQL",
    description: "A powerful, open-source object-relational database system.",
    icon: <SiPostgresql color="#64ffda" size={22} />,
  },
];

export default function Tech() {
  return (
    <TechSection>
      <TechContent>
        <TechHeadingContainer>
          <span>02.</span>
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
  gap: 60px;
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
  border-radius: 8px;
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
    border-radius: 8px;
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