import { ArrowRight } from "lucide-react";

export default function Hero() {
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
          justifyContent: "center",
          width: "80%",
        }}
      >
        <span
          style={{
            color: "#64ffda",
            textTransform: "uppercase",
            fontSize: "16px",
            lineHeight: 1,
            fontWeight: "400",
            marginBottom: "16px",
          }}
        >
          Hi, my name is
        </span>
        <h1
          style={{
            color: "#ccd6f6",
            fontSize: "88px",
            fontWeight: "700",
            fontFamily: "var(--font-bricolage-grotesque)",
            lineHeight: 1.1,
          }}
        >
          Deepanshu.
        </h1>
        <h2
          style={{
            color: "#a8b2d1b3",
            fontSize: "76px",
            fontWeight: "700",
            fontFamily: "var(--font-bricolage-grotesque)",
            lineHeight: 1.1,
          }}
        >
          I build things for the web.
        </h2>
        <p
          style={{
            color: "#8892b0",
            fontSize: "20px",
            fontFamily: "var(--font-bricolage-grotesque)",
            lineHeight: 1.5,
            marginTop: "20px",
            maxWidth: "620px",
          }}
        >
          Im a frontend developer specializing in building exceptional digital
          experiences. Currently, Im focused on crafting accessible,
          human-centered products with modern web technologies.
        </p>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              backgroundColor: "#64ffda",
              color: "#0a1929",
              fontSize: "14px",
              fontWeight: "500",
              padding: "14px 28px",
              border: "none",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Check out my work <ArrowRight color="#0a1929" size={16} />
          </button>
          <button
            style={{
              color: "#64ffda",
              fontSize: "14px",
              padding: "14px 28px",
              border: "1px solid #64ffda",
              borderRadius: "30px",
            }}
          >
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
}
