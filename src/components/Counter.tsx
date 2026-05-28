import { AutoCounter } from "./styled";

export default function Counter() {
  return (
    <section
      style={{
        minHeight: "fit-content",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          width: "100%",
          // boxShadow: '0 10px 30px -10px #64ffda80'
        }}
      >
        <AutoCounter>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "800",
              color: "#0b1b31",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: "1",
            }}
          >
            40+
          </h1>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#0b1b31",
              lineHeight: "1.5",
            }}
          >
            Projects Completed
          </p>
        </AutoCounter>
        <AutoCounter>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "800",
              color: "#0b1b31",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: "1",
            }}
          >
            40+
          </h1>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#0b1b31",
              lineHeight: "1.5",
            }}
          >
            Projects Completed
          </p>
        </AutoCounter>
        <AutoCounter>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "800",
              color: "#0b1b31",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: "1",
            }}
          >
            40+
          </h1>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#0b1b31",
              lineHeight: "1.5",
            }}
          >
            Projects Completed
          </p>
        </AutoCounter>
        <AutoCounter>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "800",
              color: "#0b1b31",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: "1",
            }}
          >
            40+
          </h1>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#0b1b31",
              lineHeight: "1.5",
            }}
          >
            Projects Completed
          </p>
        </AutoCounter>
      </div>
    </section>
  );
}
