"use client";

import { BsCloudUpload } from "react-icons/bs";
import { LuCode, LuMonitor } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { LuDatabase } from "react-icons/lu";




import { useEffect, useRef } from "react";
import styled from "styled-components";

const services = [
  {
    title: "Frontend Development",
    icon: <LuMonitor color="#64ffda" size={24} />,
    description:
      "Building responsive, interactive, and visually appealing user interfaces that deliver seamless experiences across all devices.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    icon: <LuSettings color="#64ffda" size={24} />,
    description:
      "Developing secure, scalable, and efficient server-side applications, APIs, and business logic for modern web platforms.",
    techStack: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Socket.io",
      "MongoDB",
    ],
  },
  {
    title: "Full-Stack Development",
    icon: <LuLayers color="#64ffda" size={24} />,
    description:
      "Creating end-to-end web applications by seamlessly integrating frontend interfaces with robust backend systems.",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Database Management",
    icon: <LuDatabase color="#64ffda" size={24} />,
    description:
      "Designing, managing, and optimizing databases to ensure data integrity, scalability, and high performance.",
    techStack: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    title: "API Development & Integration",
    icon: <LuCode color="#64ffda" size={24} />,
    description:
      "Building RESTful APIs and integrating third-party services to enhance application functionality and connectivity.",
    techStack: [
      "REST API",
      "Express.js",
      "Postman",
      "Axios",
      "JWT",
    ],
  },
  {
    title: "Cloud Deployment",
    icon: <BsCloudUpload color="#64ffda" size={24} />,
    description:
      "Deploying, managing, and maintaining web applications using modern cloud platforms and CI/CD workflows.",
    techStack: [
      "Vercel",
      "Netlify",
      "Render",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
  },
];

export default function Services() {
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
    <OfferSection id="services" ref={ref}>
      <OfferContent>
        <OfferHeadingContainer>
          <OfferIntro>03.</OfferIntro>
          <OfferHeading>What I Offer</OfferHeading>
          <OfferLine />
        </OfferHeadingContainer>
        <OfferGrid>
          {services.map((service, i) => (
            <OfferItem key={i}>
              <span>0{i + 1}</span>
              <div>
                {service.icon}
              </div>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <ul>
                {service.techStack.map((skill, j) => (
                  <li key={j}>{skill}</li>
                ))}
              </ul>
            </OfferItem>
          ))}
        </OfferGrid>
      </OfferContent>
    </OfferSection>
  );
}

export const OfferSection = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const OfferContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 40px;
  }
`;

export const OfferHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const OfferIntro = styled.span`
  color: #64ffda;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const OfferHeading = styled.h1`
  color: #ccd6f6;
  font-size: 36px;
  font-weight: 700;
  font-family: var(--font-bricolage-grotesque);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const OfferLine = styled.div`
  width: 30%;
  height: 1px;
  background-color: #23355499;
`;

export const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const OfferItem = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border: 1px solid #23355499;
  border-radius: 4px;
  background-color: #0d1c37;
  position: relative;
  transition:
    transform 0.3s ease,
    border 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #64ffda;
    left: 0;
    bottom: 0;
    transform: scale(0, 1);
    transform-origin: 0% 100%;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scale(1, 1);
  }

  span {
    color: #64ffda;
    text-transform: uppercase;
    font-family: var(--font-bricolage-grotesque);
    font-size: 120px;
    font-weight: 700;
    line-height: 0.7;
    position: absolute;
    bottom: 20px;
    right: 20px;
    opacity: 0.1;
  }

  div {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #64ffdb16;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin-bottom: 16px;
  }

  h1 {
    color: #ccd6f6;
    font-size: 18px;
    font-family: var(--font-bricolage-grotesque);
    font-weight: 600;
    line-height: 1;
    transition: color 0.3s ease;
  }

  p {
    color: #8892b0;
    font-size: 14px;
    line-height: 1.5;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    color: #8892b0;
    font-size: 14px;
    line-height: 1.5;
  }

  &:hover {
    div {
      background-color: #64ffdb22;
    }
  }
`;
