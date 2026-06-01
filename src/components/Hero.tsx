import { ArrowRight } from "lucide-react";
import styled from "styled-components";

export default function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <HeroIntro>Hi, my name is</HeroIntro>
        <HeroHeading>Deepanshu.</HeroHeading>
        <HeroSubHeading>I build things for the web.</HeroSubHeading>
        <HeroDescription>
          Im a frontend developer specializing in building exceptional digital
          experiences. Currently, Im focused on crafting accessible,
          human-centered products with modern web technologies.
        </HeroDescription>
        <HeroBtnContainer>
          <CheckoutMyWorkBtn>
            Check out my work <ArrowRight color="#0a1929" size={16} />
          </CheckoutMyWorkBtn>
          <ContactMeBtn>Contact me</ContactMeBtn>
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
  color: #64ffda;
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
  color: #ccd6f6;
  font-size: 88px;
  font-weight: 700;
  font-family: var(--font-bricolage-grotesque);
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const HeroSubHeading = styled.h2`
  color: #a8b2d1b3;
  font-size: 76px;
  font-weight: 700;
  font-family: var(--font-bricolage-grotesque);
  line-height: 1.1;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const HeroDescription = styled.p`
  color: #8892b0;
  font-size: 18px;
  font-family: var(--font-bricolage-grotesque);
  line-height: 1.5;
  max-width: 600px;

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

export const CheckoutMyWorkBtn = styled.button`
  background-color: #64ffda;
  color: #0a1929;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 30px - 10px #64ffda80;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ContactMeBtn = styled.button`
  color: #64ffda;
  font-size: 14px;
  font-weight: 500;
  padding: 14px 28px;
  border: 1px solid #64ffda;
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
