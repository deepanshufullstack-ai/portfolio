"use client";

import { Mail, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Contact() {
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
      id="contact"
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
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <span
            style={{
              color: "#64ffda",
              textTransform: "uppercase",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            04. whats next
          </span>
          <h1
            style={{
              color: "#ccd6f6",
              fontSize: "68px",
              fontWeight: "700",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: 1,
            }}
          >
            Lets build
            <br /> something
            <br /> together.
          </h1>
          <p
            style={{
              color: "#8892b0",
              fontSize: "20px",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: 1.5,
              maxWidth: "620px",
            }}
          >
            Whether you have a specific project in mind, an exciting
            <br />
            opportunity, or just want to connect — my inbox is always
            <br /> open. Ill try my best to get back to you!
          </p>
          <a
            href=""
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#64ffdb2f",
                borderRadius: "4px",
              }}
            >
              <Mail color="#64ffda" size={20} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span
                style={{
                  color: "#8892b0",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: 1,
                }}
              >
                email me
              </span>
              <h1
                style={{
                  color: "#ccd6f6",
                  fontFamily: "var(--font-bricolage-grotesque)",
                  fontSize: "17px",
                  fontWeight: "400",
                  lineHeight: 1,
                }}
              >
                hello@alexmercer.com
              </h1>
            </div>
          </a>
                    <a
            href=""
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#64ffdb2f",
                borderRadius: "4px",
              }}
            >
              <MapPin color="#64ffda" size={20} />
              
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span
                style={{
                  color: "#8892b0",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: 1,
                }}
              >
                location
              </span>
              <h1
                style={{
                  color: "#ccd6f6",
                  fontFamily: "var(--font-bricolage-grotesque)",
                  fontSize: "17px",
                  fontWeight: "400",
                  lineHeight: 1,
                }}
              >
                San Francisco, CA
              </h1>
            </div>
          </a>
        </div>
        <div style={{ width: "50%" }}></div>
      </div>
    </section>
  );
}
