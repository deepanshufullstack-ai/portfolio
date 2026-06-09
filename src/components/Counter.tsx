import styled from "styled-components";

const counters = [
  { count: "2+", label: "Years of Experience" },
  { count: "10+", label: "Projects Completed" },
  { count: "10+", label: "Happy Clients" },
  { count: "4", label: "Awards Won" },
];

export default function Counter() {
  return (
    <CounterSection>
      <CounterGrid>
        {counters.map((counter, index) => (
          <AutoCounter key={index}>
            <h1>{counter.count}</h1>
            <p>{counter.label}</p>
          </AutoCounter>
        ))}
      </CounterGrid>
    </CounterSection>
  );
}

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
    font-weight: 600;
    line-height: 1.5;
  }

  &:last-child {
    border-right: none;
  }
`;
