import {
  TechContent,
  TechGrid,
  TechHeadingContainer,
  TechItem,
  TechSection,
} from "./styled";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";

import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

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
