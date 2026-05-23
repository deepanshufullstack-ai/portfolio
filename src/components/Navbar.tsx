"use client";

import { Hexagon } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = ["About", "Experience", "Work", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
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
        transition: "all 0.5s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100vw",
        height: scrolled ? "80px" : "96px",
        borderBottom: scrolled ? "1px solid #a8b2d111" : "1px solid #0b1b31",
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
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
          <h1 style={{ fontSize: "14px" }}>
            Deepanshu<span style={{ color: "#64ffda" }}>.</span>
          </h1>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          {navLinks.map((link, index) => (
            <button key={link} style={{ fontSize: "14px", cursor: "pointer" }}>
              <span style={{ color: "#64ffda" }}>0{index + 1}. </span>
              {link}
            </button>
          ))}
          <button
            style={{
              color: "#64ffda",
              fontSize: "14px",
              padding: "10px 20px",
              border: "1px solid #64ffda",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => {
              alert("Add resume here");
            }}
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
