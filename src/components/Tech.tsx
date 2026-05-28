import { TechItem } from "./styled";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";

import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";


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
          <TechItem>
            <div className="iconContainer">
              <RiJavascriptLine color="#64ffda" size={22} />
            </div>
            <h2 className="techName">JavaScript</h2>
            <p className="description">
              A programming language that is one of the core technologies of the
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <SiTypescript color="#64ffda" size={22} />
            </div>
            <h2 className="techName">TypeScript</h2>
            <p className="description">
              A strongly typed programming language that builds on JavaScript
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <FaReact color="#64ffda" size={22} />
            </div>
            <h2 className="techName">React.js</h2>
            <p className="description">
              A JavaScript library for building user interfaces
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <RiNextjsLine color="#64ffda" size={22} />
            </div>
            <h2 className="techName">Next.js</h2>
            <p className="description">
              A React framework for building server-side rendered applications
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <FaNodeJs color="#64ffda" size={22} />
            </div>
            <h2 className="techName">Node.js</h2>
            <p className="description">
              A JavaScript runtime built on Chromes V8 JavaScript engine
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <SiNestjs color="#64ffda" size={22} />
            </div>
            <h2 className="techName">NestJS</h2>
            <p className="description">
              A JavaScript framework for building efficient and scalable
              server-side applications
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <SiMongodb color="#64ffda" size={22} />
            </div>
            <h2 className="techName">MongoDB</h2>
            <p className="description">
              A NoSQL database for handling unstructured data
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <SiPostgresql color="#64ffda" size={22} />
            </div>
            <h2 className="techName">PostgreSQL</h2>
            <p className="description">
              A powerful, open-source object-relational database system
            </p>
          </TechItem>
        </div>
      </div>
    </section>
  );
}
