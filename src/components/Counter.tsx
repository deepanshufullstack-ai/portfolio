import { AutoCounter, CounterGrid, CounterSection } from "./styled";

const counters = [
  { count: "5+", label: "Years of Experience" },
  { count: "20+", label: "Projects Completed" },
  { count: "10+", label: "Happy Clients" },
  { count: "3", label: "Awards Won" },
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
