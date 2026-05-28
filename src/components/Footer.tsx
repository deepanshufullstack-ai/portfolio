export default function Footer() {
  return (
    <section
      style={{
        minHeight: "100px",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid #23355499",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "center",
          gap: "40px",
          width: "70%",
        }}
      >
        <h1 style={{ fontSize: "14px", fontWeight: "400", color: "#8892b0" }}>
          Designed & Built by{" "}
          <span style={{ color: "#64ffda" }}>Deepanshu Mahawar </span>· © 2026
        </h1>
      </div>
    </section>
  );
}
