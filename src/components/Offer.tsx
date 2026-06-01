import {
  OfferContent,
  OfferGrid,
  OfferHeading,
  OfferHeadingContainer,
  OfferIntro,
  OfferItem,
  OfferLine,
  OfferSection,
} from "./styled";
import { RiComputerLine } from "react-icons/ri";

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
