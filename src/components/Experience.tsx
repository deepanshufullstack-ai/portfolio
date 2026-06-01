"use client";

import { useEffect, useRef } from "react";
import {
  ExperienceContent,
  ExperienceGrid,
  ExperienceHeadingContainer,
  ExperienceItem,
  ExperienceItemDate,
  ExperienceItemDescription,
  ExperienceItemHeadingContainer,
  ExperienceItemPointer,
  ExperienceSection,
} from "./styled";

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
