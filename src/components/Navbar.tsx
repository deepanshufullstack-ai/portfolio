"use client";

import { Hexagon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MenuItem, ResumeBtn } from "./styled";

const navLinks = [
  { menu: "About", href: "#about" },
  { menu: "Experience", href: "#experience" },
  { menu: "Work", href: "#work" },
  { menu: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollTop / docHeight;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      setScrolled(scrollTop > 50);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    updateScrollProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100vw",
        height: scrolled ? "80px" : "96px",
        borderBottom: scrolled ? "1px solid #a8b2d111" : "1px solid #0b1b31",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        ref={progressRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background: "#64ffda",
          transform: "scaleX(0)",
          transformOrigin: "left",
          willChange: "transform",
          boxShadow: "0 0 10px #64ffda",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <a
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={() => window.location.reload()}
        >
          <Hexagon size={26} color="#64ffda" />

          <h1 style={{ fontSize: "14px", fontWeight: "500" }}>
            Deepanshu<span style={{ color: "#64ffda" }}>.</span>
          </h1>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          {navLinks.map((item, index) => (
            <MenuItem key={item.menu} href={item.href}>
              <span>0{index + 1}. </span>
              {item.menu}
            </MenuItem>
          ))}

          <ResumeBtn href="/Deepanshu_Frontend.pdf" target="_blank">
            Resume
          </ResumeBtn>
        </div>
      </div>
    </nav>
  );
}
