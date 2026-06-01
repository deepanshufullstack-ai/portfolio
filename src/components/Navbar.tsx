"use client";

import { Hexagon, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Circle,
  DrawerContainer,
  Logo,
  LogoText,
  MenuItem,
  MobileResumeBtn,
  NavbarContainer,
  NavbarWrapper,
  NavMenu,
  ProgressBar,
  ResumeBtn,
} from "./styled";
import { Drawer } from "@mui/material";

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
