"use client";

import { useEffect, useRef, useState } from "react";
import { LuGithub } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";

import styled from "styled-components";

const projects = [
  {
    id: 1,
    title: "TaskFlow",
    subtitle: "Project Management Platform",
    description:
      "A full-stack project management application with task tracking, team collaboration, role-based access, and analytics dashboard.",
    githubLink: "https://github.com/yourusername/taskflow",
    liveLink: "https://taskflow.vercel.app",
    image: "../hp.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    category: "Web Application",
    status: "Completed",
    year: 2025,
    featured: true,
    highlights: [
      "Kanban board",
      "Team collaboration",
      "Real-time updates",
      "Analytics dashboard",
    ],
  },

  {
    id: 2,
    title: "AI Resume Builder",
    subtitle: "Smart Resume Generation Tool",
    description:
      "An AI-powered resume builder that creates professional resumes tailored to specific job descriptions.",
    githubLink: "https://github.com/yourusername/ai-resume-builder",
    liveLink: "https://ai-resume-builder.vercel.app",
    image: "../kr.png",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    category: "AI Application",
    status: "Completed",
    year: 2025,
    featured: true,
    highlights: [
      "AI-generated content",
      "PDF export",
      "Multiple templates",
      "Job optimization",
    ],
  },

  {
    id: 3,
    title: "ShopSphere",
    subtitle: "Modern E-Commerce Store",
    description:
      "A scalable e-commerce platform featuring product search, cart management, secure payments, and order tracking.",
    githubLink: "https://github.com/yourusername/shopsphere",
    liveLink: "https://shopsphere.vercel.app",
    image: "../hp.png",
    technologies: ["Next.js", "Redux", "Stripe", "MongoDB"],
    category: "E-Commerce",
    status: "Completed",
    year: 2024,
    featured: true,
    highlights: [
      "Stripe integration",
      "Product filtering",
      "Order management",
      "Responsive design",
    ],
  },

  {
    id: 4,
    title: "DevConnect",
    subtitle: "Developer Social Network",
    description:
      "A social platform where developers can share posts, connect with peers, and showcase their projects.",
    githubLink: "https://github.com/yourusername/devconnect",
    liveLink: "https://devconnect.vercel.app",
    image: "../kr.png",
    technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    category: "Social Platform",
    status: "Completed",
    year: 2024,
    featured: false,
    highlights: [
      "User profiles",
      "Post interactions",
      "Real-time chat",
      "Project showcase",
    ],
  },

  {
    id: 5,
    title: "Finance Tracker",
    subtitle: "Personal Expense Management",
    description:
      "A finance management application that helps users track expenses, manage budgets, and visualize spending habits.",
    githubLink: "https://github.com/yourusername/finance-tracker",
    liveLink: "https://finance-tracker.vercel.app",
    image: "../kr.png",
    technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    category: "Finance",
    status: "Completed",
    year: 2024,
    featured: false,
    highlights: [
      "Expense tracking",
      "Budget planning",
      "Interactive charts",
      "Monthly reports",
    ],
  },

  {
    id: 6,
    title: "WeatherVision",
    subtitle: "Real-Time Weather Dashboard",
    description:
      "A weather forecasting application providing real-time weather updates, forecasts, and location-based insights.",
    githubLink: "https://github.com/yourusername/weathervision",
    liveLink: "https://weathervision.vercel.app",
    image: "../kr.png",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    category: "Utility App",
    status: "Completed",
    year: 2023,
    featured: false,
    highlights: [
      "Live weather data",
      "7-day forecast",
      "Location detection",
      "Clean UI",
    ],
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
          <span>05.</span>
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
                {/* project image */}
                <img src={project.image} className="project-image" />

                {/* project content */}
                <div className="project-content">
                  <div className="project-status">
                    <span>{project.status}</span>
                  </div>
                  
                  <h2 className="project-subHeading">{project.subtitle}</h2>
                  <h1 className="project-heading">{project.title}</h1>
                  <ul className="tech-container">
                    {project.technologies.map((tech) => (
                      <li className="tech" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <p className="project-description">{project.description}</p>
                  <ul className="highlights-container">
                    {project.highlights.map((highlight) => (
                      <li className="highlights" key={highlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="link-container">
                    <Link href={project.githubLink} target="_blank">
                      <LuGithub className="icon" />
                    </Link>
                    <Link href={project.liveLink} target="_blank">
                      <FiArrowUpRight className="icon" />
                    </Link>
                  </div>
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
//   ({ $isActive }) =>
//     `
//   height: 500px;
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 20px;
//   padding: 10px;
//   border-radius: 8px;
//   border: 1px solid #23355499;
//   background-color: #0d1c37;
//   overflow: hidden;
//   cursor: pointer;
//   flex: ${$isActive ? "5" : "0.2"};
//   transition:
//     flex 0.5s ease,
//     transform 0.35s ease,
//     border 0.35s ease,
//     background-color 0.35s ease;

//   &:hover {
//     transform: translateY(-8px);
//     border: 1px solid #64ffdb;
//   }

//   .project-image {
//     width: 300px;
//     height: 100%;
//     object-fit: cover;
//     object-position: center;
//     border-radius: 4px;
//   }

//   .project-content {
//     height: 100%;
//     width: 100%;
//     display: ${$isActive ? "flex" : "none"};
//     flex-direction: column;
//     position: relative;
//     padding: 10px 0px;
//   }

//   .project-status {
//     position: absolute;
//     top: 0px;
//     right: 0px;
//     padding: 6px 12px;
//     border-radius: 4px;
//     background-color: #153446;
//     color: #64ffda;
//     font-size: 14px;
//     font-weight: 400;
//     font-family: var(--font-bricolage-grotesque);
//   }

//   .project-subHeading {
//     color: #64ffda;
//     line-height: 1;
//     font-size: 14px;
//     font-weight: 200;
//     font-family: var(--font-bricolage-grotesque);
//     margin-bottom: 10px;
//   }

//   .project-heading {
//     line-height: 1;
//     font-size: 24px;
//     font-weight: 500;
//     font-family: var(--font-bricolage-grotesque);
//     margin-bottom: 30px;
//     white-space: nowrap;
//   }

//   .tech-container {
//     display: flex;
//     gap: 10px;
//     margin-bottom: 10px;
//   }

//   .tech {
//     font-size: 12px;
//     font-weight: 200;
//     padding: 6px 12px;
//     border-radius: 4px;
//     background-color: #153446;
//     color: #64ffda;
//   }

//   .project-description {
//     color: #8892b0;
//     font-size: 14px;
//     margin-bottom: 20px;
//   }

//   .highlights-container {
//     list-style-type: disc;
//     padding-left: 20px;
//   }

//   .highlights {
//     color: #8892b0;
//     font-size: 14px;
//     line-height: 1.5;
//   }

//   .link-container {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     position: absolute;
//     bottom: 20px;
//     left: 0px;
//   }
// `,
// );


export const WorkCard = styled.div<{ $isActive: boolean }>(
  ({ $isActive }) => `
    height: 500px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #23355499;
    background-color: #0d1c37;
    overflow: hidden;
    cursor: pointer;

    flex: ${$isActive ? "5" : "0.2"};

    transition:
      flex 0.6s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.35s ease,
      border 0.35s ease,
      background-color 0.35s ease;

    &:hover {
      transform: translateY(-8px);
      border: 1px solid #64ffdb;
    }

    .project-image {
      width: ${$isActive ? "300px" : "100%"};
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 4px;

      transition:
        width 0.6s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.4s ease;
    }

    .project-content {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 10px 0;
      overflow: hidden;

      opacity: ${$isActive ? "1" : "0"};
      transform: ${$isActive ? "translateX(0)" : "translateX(30px)"};
      visibility: ${$isActive ? "visible" : "hidden"};

      transition:
        opacity 0.45s ease,
        transform 0.45s ease,
        visibility 0.45s ease;
    }

    .project-status {
      position: absolute;
      top: 0;
      right: 0;
      padding: 6px 12px;
      border-radius: 4px;
      background-color: #153446;
      color: #64ffda;
      font-size: 14px;
      font-weight: 400;
      font-family: var(--font-bricolage-grotesque);

      opacity: ${$isActive ? "1" : "0"};
      transform: ${$isActive ? "translateY(0)" : "translateY(-10px)"};
      transition: all 0.4s ease 0.1s;
    }

    .project-subHeading {
      color: #64ffda;
      line-height: 1;
      font-size: 14px;
      font-weight: 200;
      font-family: var(--font-bricolage-grotesque);
      margin-bottom: 10px;

      opacity: ${$isActive ? "1" : "0"};
      transform: ${$isActive ? "translateY(0)" : "translateY(15px)"};
      transition: all 0.5s ease 0.1s;
    }

    .project-heading {
      line-height: 1;
      font-size: 24px;
      font-weight: 500;
      font-family: var(--font-bricolage-grotesque);
      margin-bottom: 30px;
      white-space: nowrap;

      opacity: ${$isActive ? "1" : "0"};
      transform: ${$isActive ? "translateY(0)" : "translateY(15px)"};
      transition: all 0.5s ease 0.15s;
    }

    .tech-container {
      display: flex;
      gap: 10px;
      margin-bottom: 10px;

      opacity: ${$isActive ? "1" : "0"};
      transform: ${$isActive ? "translateY(0)" : "translateY(15px)"};
      transition: all 0.5s ease 0.2s;
    }

    .tech {
      font-size: 12px;
      font-weight: 200;
      padding: 6px 12px;
      border-radius: 4px;
      background-color: #153446;
      color: #64ffda;
    }

    .project-description {
      color: #8892b0;
      font-size: 14px;
      margin-bottom: 20px;

      opacity: ${$isActive ? "1" : "0"};
      transform: ${$isActive ? "translateY(0)" : "translateY(15px)"};
      transition: all 0.5s ease 0.25s;
    }

    .highlights-container {
      list-style-type: disc;
      padding-left: 20px;

      opacity: ${$isActive ? "1" : "0"};
      transform: ${$isActive ? "translateY(0)" : "translateY(15px)"};
      transition: all 0.5s ease 0.3s;
    }

    .highlights {
      color: #8892b0;
      font-size: 14px;
      line-height: 1.5;
    }

    .link-container {
      display: flex;
      align-items: center;
      gap: 10px;
      position: absolute;
      bottom: 20px;
      left: 0;

      opacity: ${$isActive ? "1" : "0"};
      transform: ${$isActive ? "translateY(0)" : "translateY(15px)"};
      transition: all 0.5s ease 0.35s;
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
