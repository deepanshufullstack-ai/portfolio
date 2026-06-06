"use client";

import { useEffect, useRef, useState } from "react";
import { LuGithub } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";

import styled from "styled-components";

const projects = [
  {
    id: 1,
    title: "Nexus Analytics",
    subTitle: "Featured Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt quis optio id, vitae pariatur eligendi facilis nam iure voluptates.",
    techStack: ["Nextjs", "Nodejs", "Nestjs"],
  },
  {
    id: 2,
    title: "Nexus Analytics",
    subTitle: "Featured Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt quis optio id, vitae pariatur eligendi facilis nam iure voluptates.",
    techStack: ["Nextjs", "Nodejs", "Nestjs"],
  },
  {
    id: 3,
    title: "Nexus Analytics",
    subTitle: "Featured Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt quis optio id, vitae pariatur eligendi facilis nam iure voluptates.",
    techStack: ["Nextjs", "Nodejs", "Nestjs"],
  },
  {
    id: 4,
    title: "Nexus Analytics",
    subTitle: "Featured Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt quis optio id, vitae pariatur eligendi facilis nam iure voluptates.",
    techStack: ["Nextjs", "Nodejs", "Nestjs"],
  },
  {
    id: 5,
    title: "Nexus Analytics",
    subTitle: "Featured Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt quis optio id, vitae pariatur eligendi facilis nam iure voluptates.",
    techStack: ["Nextjs", "Nodejs", "Nestjs"],
  },
  {
    id: 6,
    title: "Nexus Analytics",
    subTitle: "Featured Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt quis optio id, vitae pariatur eligendi facilis nam iure voluptates.",
    techStack: ["Nextjs", "Nodejs", "Nestjs"],
  },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const [isActiveId, setIsActiveId] = useState(1);

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
    <WorkSection id="work" ref={ref}>
      <WorkContent>
        <WorkHeadingContainer>
          <span>01.</span>
          <h1>Some Things Ive Built</h1>
          <div />
        </WorkHeadingContainer>
        <WorkContainer>
          {projects.map((project) => {
            const isActive = isActiveId === project.id;
            return (
              <WorkCard
                key={project.id}
                $isActive={isActive}
                onClick={() => setIsActiveId(project.id)}
              >
                <span className="project-index">0{project.id}</span>
                <h2 className="project-subHeading">{project.subTitle}</h2>
                <h1 className="project-heading">{project.title}</h1>
                <p className="project-description">{project.description}</p>
                <ul className="tech-container">
                  {project.techStack.map((tech) => (
                    <li className="tech" key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="link-container">
                  <Link>
                    <LuGithub className="icon" />
                  </Link>
                  <Link>
                    <FiArrowUpRight className="icon" />
                  </Link>
                </div>
              </WorkCard>
            );
          })}
        </WorkContainer>
      </WorkContent>
    </WorkSection>
  );
}

export const WorkSection = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 40px;
  }
`;

export const WorkHeadingContainer = styled.div`
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

export const WorkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;
// export const WorkCard = styled.div<{ $isActive: boolean }>(
//   ({ $isActive }) => `
//     flex: ${$isActive ? "5" : "1"};
//     height: 500px;
//     position: relative;
//     overflow: hidden;
//     cursor: pointer;

//     padding: 24px;
//     border-radius: 12px;

//     background: linear-gradient(
//       180deg,
//       rgba(13, 28, 55, 0.95) 0%,
//       rgba(8, 17, 35, 1) 100%
//     );

//     border: 1px solid rgba(100, 255, 218, 0.12);

//     box-shadow:
//       0 10px 30px rgba(0, 0, 0, 0.25),
//       inset 0 1px 0 rgba(255, 255, 255, 0.04);

//     backdrop-filter: blur(10px);

//     transition:
//       flex 0.5s ease,
//       transform 0.35s ease,
//       box-shadow 0.35s ease,
//       border-color 0.35s ease,
//       background 0.35s ease;

//     &:hover {
//       flex: 5;
//       transform: translateY(-8px);

//       border-color: rgba(100, 255, 218, 0.4);

//       box-shadow:
//         0 20px 50px rgba(0, 0, 0, 0.45),
//         0 0 30px rgba(100, 255, 218, 0.12);
//     }

//     &::before {
//       content: "";
//       position: absolute;
//       inset: 0;
//       background: radial-gradient(
//         circle at top right,
//         rgba(100, 255, 218, 0.08),
//         transparent 50%
//       );
//       pointer-events: none;
//       opacity: 0;
//       transition: opacity 0.4s ease;
//     }

//     &:hover::before {
//       opacity: 1;
//     }

//     h1 {
//       line-height: 1.1;
//       font-size: 24px;
//       font-weight: 600;
//       font-family: var(--font-bricolage-grotesque);
//       margin-bottom: 20px;
//       color: #fff;
//       transition: color 0.3s ease;
//     }

//     &:hover h1 {
//       color: #64ffda;
//     }

//     h2 {
//       color: #64ffda;
//       line-height: 1;
//       font-size: 14px;
//       font-weight: 300;
//       font-family: var(--font-bricolage-grotesque);
//       margin-bottom: 12px;
//       letter-spacing: 1px;
//       text-transform: uppercase;
//     }

//     ul {
//       display: flex;
//       align-items: center;
//       flex-wrap: wrap;
//       gap: 12px;
//       margin-bottom: 20px;

//       li {
//         border: 1px solid rgba(100, 255, 218, 0.4);
//         border-radius: 999px;
//         color: #64ffda;
//         font-size: 13px;
//         font-weight: 500;
//         padding: 6px 12px;
//         background: rgba(100, 255, 218, 0.05);

//         transition:
//           transform 0.3s ease,
//           background 0.3s ease;
//       }

//       li:hover {
//         transform: translateY(-2px);
//         background: rgba(100, 255, 218, 0.12);
//       }
//     }

//     p {
//       font-size: 14px;
//       line-height: 1.7;
//       font-weight: 300;
//       color: rgba(255, 255, 255, 0.8);
//     }

//     div {
//       display: flex;
//       align-items: center;
//       gap: 16px;
//       position: absolute;
//       bottom: 24px;
//       left: 24px;

//       transition: transform 0.3s ease;
//     }

//     &:hover div {
//       transform: translateX(6px);
//     }
//   `
// );

export const WorkCard = styled.div<{ $isActive: boolean }>(
  ({ $isActive }) =>
    `
  flex: ${$isActive ? "5" : "0.2"};
  height: 500px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 20px;
  border-radius: 8px;
  background-color: #0d1c37;
  border: 1px solid #23355499;
  transition:
    flex 0.5s ease,
    transform 0.35s ease,
    border 0.35s ease,
    background-color 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    border: 1px solid #64ffdb;
  }

  .project-index {
    color: #64ffda;
    font-size: 14px;
    font-weight: 50;
    display: ${$isActive ? 'none' : 'block'};
    position: ${$isActive ? "none" : "absolute"};
    top: ${$isActive ? "none" : "30px"};
    left: ${$isActive ? "none" : "50%"};
    transform: ${$isActive ? "none" : "translate(-50%, -50%)"};
  }

  .project-heading {
    line-height: 1;
    font-size: ${$isActive ? "24px" : "18px"};
    font-weight: ${$isActive ? "500" : "200"};
    font-family: var(--font-bricolage-grotesque);
    margin-bottom: 20px;
    white-space: nowrap;
    transform: ${$isActive ? "rotate(0deg)" : "rotate(90deg)"};
    margin-top: ${$isActive ? "0px" : "200px"}
  }

  .project-subHeading {
    display: ${$isActive ? "block" : "none"};
    color: #64ffda;
    line-height: 1;
    font-size: 14px;
    font-weight: 200;
    font-family: var(--font-bricolage-grotesque);
    margin-bottom: 10px;
  }

  .project-description {
    font-size: 14px;
    font-weight: 200;
    display: ${$isActive ? "block" : "none"};
  }

  .link-container {
    display: flex;
    flex-direction: ${$isActive ? "row" : "column"};
    align-items: center;
    gap: ${$isActive ? "16px" : '14px'};
    position: absolute;
    bottom: ${$isActive ? "20px" : "-30px"};
    left: ${$isActive ? "20px" : "50%"};
    transform: ${$isActive ? "none" : "translate(-50%, -50%)"};
  }

  .tech-container {
    display: ${$isActive ? "block" : "none"};
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 20px;
  }

  .tech {
    font-size: 14px;
    line-height: 1.5;
  }
`,
);

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid #23355499;
  border-radius: 50%;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    border 0.3s ease;

  .icon {
    font-size: 18px;
    color: #8892b0;
    transition: color 0.3s ease;
  }

  &:hover {
    border: 1px solid #64ffda;
    transform: translateY(-4px);

    .icon {
      color: #64ffda;
    }
  }
`;
