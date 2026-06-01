import styled from "styled-components";

// navbar
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

//hero
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

//contact
export const ConnectBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  .icon-container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #64ffdb2f;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .link-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      color: #8892b0;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 400;
      line-height: 1;
    }

    h1 {
      color: #ccd6f6;
      font-family: var(--font - bricolage - grotesque);
      font-size: 16px;
      font-weight: 400;
      line-height: 1;
      transition: color 0.3s ease;
    }
  }

  &:hover {
    .icon-container {
      background-color: #64ffdb54;
    }

    .link-container h1 {
      color: #64ffda;
    }
  }
`;

export const SubConnectBtn = styled.a`
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
    transform: translateY(-4px);

    .icon {
      color: #64ffda;
    }
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  color: #ccd6f6;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const FormInput = styled.input`
  border: 1px solid #23355499;
  border-radius: 4px;
  background-color: #0b1b31;
  padding: 12px 16px;
  outline: none;

  &:focus {
    border: 1px solid #64ffda;
  }

  &:hover {
    border: 1px solid #64ffda;
  }

  &::placeholder {
    color: #8892b0;
    font-size: 16px;
    font-family: var(--font - bricolage - grotesque);
  }
`;

export const FormTextArea = styled.textarea`
  border: 1px solid #23355499;
  border-radius: 4px;
  background-color: #0b1b31;
  padding: 12px 16px;
  resize: none;
  outline: none;

  &:focus {
    border: 1px solid #64ffda;
  }

  &:hover {
    border: 1px solid #64ffda;
  }

  &::placeholder {
    color: #8892b0;
    font-size: 16px;
    font-family: var(--font - bricolage - grotesque);
  }
`;

export const SendMessageBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #64ffda;
  color: #0a1929;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

// tech
export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border: 1px solid #23355499;
  border-radius: 8px;
  background-color: #0d1c37;
  transition:
    transform 0.3s ease,
    border 0.3s ease;

  .iconContainer {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #153446;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    margin-bottom: 16px;
  }

  .techName {
    color: #ccd6f6;
    font-size: 18px;
    font-family: var(--font - bricolage - grotesque);
    font-weight: 600;
    line-height: 1;
    transition: color 0.3s ease;
  }

  .description {
    color: #8892b0;
    font-size: 14px;
    line-height: 1.5;
  }

  &:hover {
    border: 1px solid #64ffda;
    transform: translateY(-4px);

    .iconContainer {
      background-color: #64ffdb54;
    }

    .techName {
      color: #64ffda;
    }
  }
`;

//counter
export const CounterSection = styled.section`
  min-height: fit-content;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CounterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AutoCounter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 52px 44px;
  background-color: #64ffda;
  border: 1px solid #0b1b31;

  h1 {
    color: #0b1b31;
    font-size: 60px;
    font-weight: 800;
    font-family: var(--font-bricolage-grotesque);
    line-height: 1;
  }

  p {
    color: #0b1b31;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
  }

  &:last-child {
    border-right: none;
  }
`;

//offer
export const OfferItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border: 1px solid #23355499;
  border-radius: 0px;
  background-color: #0d1c37;
  position: relative;
  transition:
    transform 0.3s ease,
    border 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #64ffda;
    left: 0;
    bottom: 0;
    transform: scale(0, 1);
    transform-origin: 0% 100%;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scale(1, 1);
  }

  span {
    color: #64ffda;
    text-transform: uppercase;
    font-family: var(--font - bricolage - grotesque);
    font-size: 120px;
    font-weight: 700;
    line-height: 0.8;
    position: absolute;
    top: 6px;
    right: 6px;
    opacity: 0.1;
  }

  .icon-container {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #64ffdb16;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin-bottom: 16px;
  }

  .offerTitle {
    color: #ccd6f6;
    font-size: 18px;
    font-family: var(--font - bricolage - grotesque);
    font-weight: 600;
    line-height: 1;
    transition: color 0.3s ease;
  }

  .description {
    color: #8892b0;
    font-size: 14px;
    line-height: 1.5;
  }

  .ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    color: #8892b0;
    font-size: 14px;
    line-height: 1.5;
  }

  &:hover {
    .icon-container {
      background-color: #64ffdb22;
    }
  }
`;
