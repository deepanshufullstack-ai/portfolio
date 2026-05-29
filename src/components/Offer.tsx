import { OfferItem } from "./styled";
import { RiComputerLine } from "react-icons/ri";

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
            gap: "20px",
          }}
        >
          <OfferItem>
            <span>01</span>
            <div className="icon-container">
              <RiComputerLine color="#64ffda" size={24} />
            </div>
            <h1 className="offerTitle">Frontend Development</h1>
            <p className="description">
              Building responsive and interactive user interfaces with modern
              web technologies.
            </p>
            <ul>
              <li>React</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </OfferItem>
          <OfferItem>
            <span>02</span>
            <div className="icon-container">
              <RiComputerLine color="#64ffda" size={24} />
            </div>
            <h1 className="offerTitle">Frontend Development</h1>
            <p className="description">
              Building responsive and interactive user interfaces with modern
              web technologies.
            </p>
            <ul>
              <li>React</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </OfferItem>
          <OfferItem>
            <span>03</span>
            <div className="icon-container">
              <RiComputerLine color="#64ffda" size={24} />
            </div>
            <h1 className="offerTitle">Frontend Development</h1>
            <p className="description">
              Building responsive and interactive user interfaces with modern
              web technologies.
            </p>
            <ul>
              <li>React</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </OfferItem>
          <OfferItem>
            <span>02</span>
            <div className="icon-container">
              <RiComputerLine color="#64ffda" size={24} />
            </div>
            <h1 className="offerTitle">Frontend Development</h1>
            <p className="description">
              Building responsive and interactive user interfaces with modern
              web technologies.
            </p>
            <ul>
              <li>React</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </OfferItem>
          <OfferItem>
            <span>02</span>
            <div className="icon-container">
              <RiComputerLine color="#64ffda" size={24} />
            </div>
            <h1 className="offerTitle">Frontend Development</h1>
            <p className="description">
              Building responsive and interactive user interfaces with modern
              web technologies.
            </p>
            <ul>
              <li>React</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </OfferItem>
          <OfferItem>
            <span>02</span>
            <div className="icon-container" >
              <RiComputerLine color="#64ffda" size={24} />
            </div>
            <h1 className="offerTitle">Frontend Development</h1>
            <p className="description">
              Building responsive and interactive user interfaces with modern
              web technologies.
            </p>
            <ul>
              <li>React</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </OfferItem>
        </div>
      </div>
    </section>
  );
}
