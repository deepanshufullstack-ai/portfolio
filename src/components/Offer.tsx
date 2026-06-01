
import { RiComputerLine } from "react-icons/ri";
import styled from "styled-components";

const offers = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern web technologies.",
    skills: ["React", "Vue.js", "Angular"],
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable and maintainable server-side applications with modern technologies.",
    skills: ["Node.js", "Python", "Java"],
  },
  {
    title: "UI/UX Design",
    description:
      "Creating user-centered designs that are both visually appealing and easy to use.",
    skills: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern web technologies.",
    skills: ["React", "Vue.js", "Angular"],
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable and maintainable server-side applications with modern technologies.",
    skills: ["Node.js", "Python", "Java"],
  },
  {
    title: "UI/UX Design",
    description:
      "Creating user-centered designs that are both visually appealing and easy to use.",
    skills: ["Figma", "Adobe XD", "Sketch"],
  },
];

export default function Offer() {
  return (
    <OfferSection>
      <OfferContent>
        <OfferHeadingContainer>
          <OfferIntro>03.</OfferIntro>
          <OfferHeading>What I Offer</OfferHeading>
          <OfferLine />
        </OfferHeadingContainer>
        <OfferGrid>
          {offers.map((offer, i) => (
            <OfferItem key={i}>
              <span>0{i + 1}</span>
              <div>
                <RiComputerLine color="#64ffda" size={24} />
              </div>
              <h1>{offer.title}</h1>
              <p>{offer.description}</p>
              <ul>
                {offer.skills.map((skill, j) => (
                  <li key={j}>{skill}</li>
                ))}
              </ul>
            </OfferItem>
          ))}
        </OfferGrid>
      </OfferContent>
    </OfferSection>
  );
}

//offer
export const OfferSection = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export const OfferContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 40px;
  }
`;

export const OfferHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const OfferIntro = styled.span`
  color: #64ffda;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const OfferHeading = styled.h1`
  color: #ccd6f6;
  font-size: 36px;
  font-weight: 700;
  font-family: var(--font-bricolage-grotesque);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const OfferLine = styled.div`
  width: 30%;
  height: 1px;
  background-color: #23355499;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

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
    font-family: var(--font-bricolage-grotesque);
    font-size: 120px;
    font-weight: 700;
    line-height: 0.8;
    position: absolute;
    top: 6px;
    right: 6px;
    opacity: 0.1;
  }

  div {
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

  h1 {
    color: #ccd6f6;
    font-size: 18px;
    font-family: var(--font-bricolage-grotesque);
    font-weight: 600;
    line-height: 1;
    transition: color 0.3s ease;
  }

  p {
    color: #8892b0;
    font-size: 14px;
    line-height: 1.5;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    color: #8892b0;
    font-size: 14px;
    line-height: 1.5;
  }

  &:hover {
    div {
      background-color: #64ffdb22;
    }
  }
`;