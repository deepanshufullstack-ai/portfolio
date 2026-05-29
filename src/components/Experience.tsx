"use client";

import { useEffect, useRef } from "react";

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
    <section
      id="experience"
      ref={ref}
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
            Where Ive Worked
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
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            borderLeft: "1px solid #23355499",
            paddingLeft: "40px",
            position: "relative",
            marginLeft: "13px",
          }}
        >
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #64ffda",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "-10px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#64ffda",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "14px",
                  color: "#64ffda",
                  fontWeight: "200",
                  textTransform: "uppercase",
                }}
              >
                Apr 2025 - Present
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginBottom: "6px",
                }}
              >
                <h1
                  style={{
                    color: "#ccd6f6",
                    fontSize: "24px",
                    fontWeight: "600",
                    fontFamily: "var(--font-bricolage-grotesque)",
                    lineHeight: 1,
                  }}
                >
                  Junior Software Engineer
                </h1>
                <h2
                  style={{
                    color: "#a8b2d1",
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "var(--font-bricolage-grotesque)",
                    lineHeight: 1,
                  }}
                >
                  Kriotek Pvt Ltd
                </h2>
              </div>
              <p
                style={{
                  color: "#8892b0",
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "var(--font-bricolage-grotesque)",
                  lineHeight: 1.5,
                  width: "60%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, dignissimos ipsa. Illo aspernatur delectus aliquid,
                at libero sint deleniti magnam dignissimos animi suscipit
                aliquam velit esse neque nam voluptas id fugiat nostrum
                voluptatum nemo, voluptatibus nisi? Molestias velit praesentium
                suscipit!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
