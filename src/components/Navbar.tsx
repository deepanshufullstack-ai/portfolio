"use client";

import { Hexagon, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Drawer } from "@mui/material";
import styled from "styled-components";

const navLinks = [
  { menu: "About", href: "#about" },
  { menu: "Experience", href: "#experience" },
  { menu: "Work", href: "#work" },
  { menu: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <NavbarContainer $scrolled={scrolled}>
      <ProgressBar ref={progressRef} />

      <NavbarWrapper>
        <Logo onClick={() => window.location.reload()}>
          <Hexagon size={26} color="#64ffda" />

          <LogoText>
            Deepanshu<span>.</span>
          </LogoText>
        </Logo>

        <NavMenu>
          {navLinks.map((item, index) => (
            <MenuItem key={item.menu} href={item.href}>
              <span>0{index + 1}. </span>
              {item.menu}
            </MenuItem>
          ))}

          <ResumeBtn href="/Deepanshu_Frontend.pdf" target="_blank">
            Resume
          </ResumeBtn>
        </NavMenu>

        {/* mobile menu button */}
        <MobileResumeBtn onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={20} color="#64ffda" />
          ) : (
            <Menu size={20} color="#64ffda" />
          )}
        </MobileResumeBtn>
      </NavbarWrapper>

      {/* mobile menu */}
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
        <DrawerContainer role="presentation" onClick={() => setMenuOpen(false)}>
          {navLinks.map((item, index) => (
            <MenuItem key={item.menu} href={item.href}>
              <span>0{index + 1}. </span>
              {item.menu}
            </MenuItem>
          ))}

          <Circle />

          <ResumeBtn href="/Deepanshu_Frontend.pdf" target="_blank">
            Resume
          </ResumeBtn>
        </DrawerContainer>
      </Drawer>
    </NavbarContainer>
  );
}

export const NavbarContainer = styled.nav<{ $scrolled: boolean }>(
  ({ $scrolled = false }) => `
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:100;
  display:flex;
  align-items:center;
  justify-content:center;
  min-width:100vw;
  transition:all 0.4s ease;
  height: ${$scrolled ? "80px" : "96px"};
  border-bottom: ${$scrolled ? "1px solid #a8b2d111" : "1px solid #0b1b31"};
  backdrop-filter: ${$scrolled ? "blur(12px)" : "none"};  

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 20px;
  }
`,
);

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #64ffda;
  transform: scaleX(0);
  transform-origin: left;
  will-change: transform;
  box-shadow: 0 0 10px #64ffda;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const LogoText = styled.h1`
  font-size: 14px;
  font-weight: 500;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  color: #e5e7eb;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;

  span {
    color: #64ffda;
  }

  &:hover {
    color: #64ffda;
  }
`;

export const ResumeBtn = styled.a`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border: 1px solid #64ffda;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #64ffdb2f;
  }
`;

export const MobileResumeBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid #23355499;
  border-radius: 4px;
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

    .icon {
      color: #64ffda;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  background-color: #0b1b31;
  height: 100%;
  width: 300px;
`;

export const Circle = styled.div`
  border-radius: 50%;
  background-color: #64ffda80;
  opacity: 0.5;
  box-shadow: 0 20px 100px 200px #64ffda80;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
