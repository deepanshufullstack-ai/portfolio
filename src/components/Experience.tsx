"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";

const experiences = [
  {
    year: "Apr 2025 - Present",
    title: "Junior Software Engineer",
    company: "Kriotek Pvt Ltd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos ipsa. Illo aspernatur delectus aliquid, at libero sint deleniti magnam dignissimos animi suscipit aliquam velit esse neque nam voluptas id fugiat nostrum voluptatum nemo, voluptatibus nisi? Molestias velit praesentium suscipit!",
  },
  {
    year: "Apr 2025 - Present",
    title: "Junior Software Engineer",
    company: "Kriotek Pvt Ltd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos ipsa. Illo aspernatur delectus aliquid, at libero sint deleniti magnam dignissimos animi suscipit aliquam velit esse neque nam voluptas id fugiat nostrum voluptatum nemo, voluptatibus nisi? Molestias velit praesentium suscipit!",
  },
  {
    year: "Apr 2025 - Present",
    title: "Junior Software Engineer",
    company: "Kriotek Pvt Ltd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dignissimos ipsa. Illo aspernatur delectus aliquid, at libero sint deleniti magnam dignissimos animi suscipit aliquam velit esse neque nam voluptas id fugiat nostrum voluptatum nemo, voluptatibus nisi? Molestias velit praesentium suscipit!",
  },
];

export default function Experience() {
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
    <ExperienceSection id="experience" ref={ref}>
      <ExperienceContent>
        <ExperienceHeadingContainer>
          <span>02.</span>
          <h1>Where Ive Worked</h1>
          <div />
        </ExperienceHeadingContainer>
        <ExperienceGrid>
          {experiences.map((exp, i) => (
            <ExperienceItem key={i}>
              <ExperienceItemPointer>
                <div />
              </ExperienceItemPointer>
              <ExperienceItemDate>Apr 2025 - Present</ExperienceItemDate>
              <ExperienceItemHeadingContainer>
                <h1>Junior Software Engineer</h1>
                <h2>Kriotek Pvt Ltd</h2>
              </ExperienceItemHeadingContainer>
              <ExperienceItemDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, dignissimos ipsa. Illo aspernatur delectus aliquid,
                at libero sint deleniti magnam dignissimos animi suscipit
                aliquam velit esse neque nam voluptas id fugiat nostrum
                voluptatum nemo, voluptatibus nisi? Molestias velit praesentium
                suscipit!
              </ExperienceItemDescription>
            </ExperienceItem>
          ))}
        </ExperienceGrid>
      </ExperienceContent>
    </ExperienceSection>
  );
}

export const ExperienceSection = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 50px;
  }
`;

export const ExperienceHeadingContainer = styled.div`
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

export const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  border-left: 1px solid #23355499;
  padding-left: 40px;
  position: relative;
  margin-left: 13px;

  @media (max-width: 768px) {
    gap: 40px;
    padding-left: 20px;
    margin-left: 8px;
  }
`;

export const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ExperienceItemPointer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #64ffda;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  left: -10px;

  div {
    width: 6px;
    height: 6px;
    background-color: #64ffda;
    border-radius: 50%;
  }
`;

export const ExperienceItemDate = styled.span`
  color: #64ffda;
  font-size: 14px;
  font-weight: 200;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ExperienceItemHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 6px;

  h1 {
    color: #ccd6f6;
    font-size: 24px;
    font-weight: 600;
    font-family: var(--font-bricolage-grotesque);
    line-height: 1;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  h2 {
    color: #a8b2d1;
    font-size: 16px;
    font-weight: 600;
    font-family: var(--font-bricolage-grotesque);
    line-height: 1;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const ExperienceItemDescription = styled.p`
  color: #8892b0;
  font-size: 16px;
  font-weight: 400;
  font-family: var(--font-bricolage-grotesque);
  line-height: 1.5;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
