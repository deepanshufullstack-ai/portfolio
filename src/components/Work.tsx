"use client";

import { useEffect, useRef } from "react";
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
];

export default function Work() {
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
    <WorkSection id="work" ref={ref}>
      <WorkContent>
        <WorkHeadingContainer>
          <span>01.</span>
          <h1>Some Things Ive Built</h1>
          <div />
        </WorkHeadingContainer>
        <WorkContainer>
          {projects.map((project) => (
            <WorkCard key={project.id}>
              <h2>{project.subTitle}</h2>
              <h1>{project.title}</h1>
              {/* <ul>
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul> */}
              <p>{project.description}</p>
              <div>
                <Link>
                  <LuGithub className="icon" />
                </Link>
                <Link>
                  <FiArrowUpRight className="icon" />
                </Link>
              </div>
            </WorkCard>
          ))}
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

export const WorkCard = styled.div`
  border: 1px solid #23355499;
  border-radius: 4px;
  background-color: #0d1c37;
  padding: 20px;
  height: 500px;
  width: 100%;
  position: relative;

  h1 {
    line-height: 1;
    font-size: 24px;
    font-weight: 600;
    font-family: var(--font-bricolage-grotesque);
    margin-bottom: 20px;
  }

  h2 {
    color: #64ffda;
    line-height: 1;
    font-size: 14px;
    font-weight: 200;
    font-family: var(--font-bricolage-grotesque);
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    li {
      border: 1px solid #64ffda;
      border-radius: 30px;
      color: #64ffda;
      font-size: 14px;
      font-weight: 400;
      padding: 4px 8px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 200;
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;

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
