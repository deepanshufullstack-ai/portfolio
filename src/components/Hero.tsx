import theme from "@/style/theme/theme";
import { ArrowRight } from "lucide-react";
import styled from "styled-components";

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <HeroIntro>Hi, my name is</HeroIntro>
        <HeroHeading>Deepanshu.</HeroHeading>
        <HeroSubHeading>Creating User-Centered <span>Solutions.</span></HeroSubHeading>
        <HeroDescription>
          I build modern, responsive web applications that prioritize usability,
          performance, and accessibility. Focused on creating intuitive
          interfaces that solve real-world problems and deliver seamless user
          experiences.
        </HeroDescription>
        <HeroBtnContainer>
          <CheckoutMyWorkBtn href="#work">
            Check out my work <ArrowRight color="#0a1929" size={16} />
          </CheckoutMyWorkBtn>
          <ContactMeBtn href="#contact">Contact me</ContactMeBtn>
        </HeroBtnContainer>
      </HeroContent>
    </HeroSection>
  );
}

export const HeroSection = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroIntro = styled.span`
  color: ${theme.colors.primary};
  text-transform: uppercase;
  font-size: 15px;
  line-height: 1;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HeroHeading = styled.h1`
  color: ${theme.colors.text.heading};
  font-size: 88px;
  font-weight: 700;
  font-family: var(--font-bricolage-grotesque);
  line-height: 1.1;
  letter-spacing: -4px;
  margin-left: -4px;


  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const HeroSubHeading = styled.h2`
  color: ${theme.colors.text.subHeading};
  font-size: 76px;
  font-weight: 700;
  font-family: var(--font-bricolage-grotesque);
  line-height: 1.1;
  margin-bottom: 16px;
  margin-left: -2px;
  letter-spacing: -4px;

  span {
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const HeroDescription = styled.p`
  color: ${theme.colors.text.description};
  font-size: 18px;
  font-family: var(--font-bricolage-grotesque);
  line-height: 1.5;
  max-width: 660px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeroBtnContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CheckoutMyWorkBtn = styled.a`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  font-size: 14px;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 30px -10px #64ffda80;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ContactMeBtn = styled.a`
  color: ${theme.colors.primary};
  font-size: 14px;
  font-weight: 500;
  padding: 14px 28px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 30px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background-color: #64ffdb2f;
  }
`;
