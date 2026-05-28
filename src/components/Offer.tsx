export default function Offer() {
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
          gap: "60px",
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
            03.
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
            What I Offer
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
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <div>
            <h1>Frontend Development</h1>
            <p>
              Building responsive and interactive user interfaces with modern
              web technologies.
            </p>
            <ul>
              <li>React</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </div>
          <div>
            <h1>Backend Development</h1>
            <p>
              Developing scalable and efficient server-side applications with
              robust APIs.
            </p>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <h1>UI/UX Design</h1>
            <p>
              Creating intuitive and visually appealing designs that enhance
              user experience.
            </p>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
