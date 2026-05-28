import { TechItem } from "./styled";
import { FaReact } from "react-icons/fa";

export default function Tech() {
  return (
    <section
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "70%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              color: "#64ffda",
              textTransform: "uppercase",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            02.
          </span>
          <h1
            style={{
              color: "#ccd6f6",
              fontSize: "36px",
              fontWeight: "700",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: 1,
            }}
          >
            My Tech Stack
          </h1>
          <div
            style={{
              width: "30%",
              height: "1px",
              backgroundColor: "#23355499",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            // gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          <TechItem>
            <div className="iconContainer">
              <FaReact color="#64ffda" size={22} />
            </div>
            <h2 className="techName">React</h2>
            <p className="description">
              A JavaScript library for building user interfaces
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <FaReact color="#64ffda" size={18} />
            </div>
            <h2 className="techName">React</h2>
            <p className="description">
              A JavaScript library for building user interfaces
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <FaReact color="#64ffda" size={18} />
            </div>
            <h2 className="techName">React</h2>
            <p className="description">
              A JavaScript library for building user interfaces
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <FaReact color="#64ffda" size={18} />
            </div>
            <h2 className="techName">React</h2>
            <p className="description">
              A JavaScript library for building user interfaces
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <FaReact color="#64ffda" size={18} />
            </div>
            <h2 className="techName">React</h2>
            <p className="description">
              A JavaScript library for building user interfaces
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <FaReact color="#64ffda" size={18} />
            </div>
            <h2 className="techName">React</h2>
            <p className="description">
              A JavaScript library for building user interfaces
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <FaReact color="#64ffda" size={18} />
            </div>
            <h2 className="techName">React</h2>
            <p className="description">
              A JavaScript library for building user interfaces
            </p>
          </TechItem>
          <TechItem>
            <div className="iconContainer">
              <FaReact color="#64ffda" size={18} />
            </div>
            <h2 className="techName">React</h2>
            <p className="description">
              A JavaScript library for building user interfaces
            </p>
          </TechItem>
        </div>
      </div>
    </section>
  );
}
