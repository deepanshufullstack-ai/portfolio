import { TechItem } from "./styled";
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
    <section
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          width: "70%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              color: "#64ffda",
              textTransform: "uppercase",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            02.
          </span>
          <h1
            style={{
              color: "#ccd6f6",
              fontSize: "36px",
              fontWeight: "700",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: 1,
            }}
          >
            My Tech Stack
          </h1>
          <div
            style={{
              width: "30%",
              height: "1px",
              backgroundColor: "#23355499",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
          }}
        >
          {techs.map((tech, i) => (
            <TechItem key={i}>
              <div className="iconContainer">{tech.icon}</div>
              <h2 className="techName">{tech.name}</h2>
              <p className="description">{tech.description}</p>
            </TechItem>
          ))}
        </div>
      </div>
    </section>
  );
}
