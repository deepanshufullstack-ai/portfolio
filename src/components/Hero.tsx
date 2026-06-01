import { ArrowRight } from "lucide-react";
import {
  CheckoutMyWorkBtn,
  ContactMeBtn,
  HeroBtnContainer,
  HeroContent,
  HeroDescription,
  HeroHeading,
  HeroIntro,
  HeroSection,
  HeroSubHeading,
} from "./styled";

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
