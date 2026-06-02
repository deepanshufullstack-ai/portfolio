import styled from "styled-components";

export default function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <FooterText>
          Designed & Built by{" "}
          <FooterHighlight>Deepanshu Mahawar </FooterHighlight>· © 2026
        </FooterText>
      </FooterContent>
    </FooterSection>
  );
}

export const FooterSection = styled.section`
  min-height: 100px;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #23355499;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 70%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FooterText = styled.h1`
  font-size: 14px;
  font-weight: 400;
  color: #8892b0;
  text-align: center;
`;

export const FooterHighlight = styled.span`
  color: #64ffda;
`;
