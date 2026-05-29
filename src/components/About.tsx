"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
      id="about"
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
          gap: "40px",
          width: "70%",
        }}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
          praesentium alias aspernatur ratione, deleniti ipsum quis animi
          dolores provident quia quod, laboriosam eos fuga ea laudantium earum
          iste doloribus vero placeat! Ex nesciunt sequi tenetur necessitatibus
          beatae recusandae rem repellendus tempora, in nostrum quia, excepturi
          error perspiciatis ut quibusdam, iste debitis quis aliquam odit ipsam
          similique nisi. Architecto commodi quas excepturi impedit, repudiandae
          voluptates veniam vero aliquam. Voluptates soluta vel nobis
          consectetur. Ad dolore, quisquam tempore cum provident fugit sapiente
          dolores, iusto eaque facere eum temporibus error quae, voluptate
          architecto cupiditate dignissimos similique. Pariatur dolores quia
          beatae rerum, fugiat totam.
        </p>
      </div>
    </section>
  );
}
