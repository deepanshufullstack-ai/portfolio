"use client";

import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";

import { Mail, MapPin, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  ConnectBtn,
  FormInput,
  FormInputContainer,
  FormLabel,
  FormTextArea,
  SendMessageBtn,
  SubConnectBtn,
} from "./styled";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 100);
          });
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="contact"
      ref={ref}
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
          gap: "40px",
          width: "70%",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <span
            style={{
              color: "#64ffda",
              textTransform: "uppercase",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            04. whats next
          </span>
          <h1
            style={{
              color: "#ccd6f6",
              fontSize: "60px",
              fontWeight: "700",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: 1,
            }}
          >
            Lets build
            <br /> something
            <br /> together.
          </h1>
          <p
            style={{
              color: "#8892b0",
              fontSize: "18px",
              fontFamily: "var(--font-bricolage-grotesque)",
              lineHeight: 1.5,
              maxWidth: "620px",
            }}
          >
            Whether you have a specific project in mind, an exciting
            <br />
            opportunity, or just want to connect — my inbox is always
            <br /> open. Ill try my best to get back to you!
          </p>

          <ConnectBtn href="" style={{ marginTop: "20px" }}>
            <div className="icon-container">
              <Mail color="#64ffda" size={18} className="icon" />
            </div>
            <div className="link-container">
              <span>email me</span>
              <h1>hello@alexmercer.com</h1>
            </div>
          </ConnectBtn>
          <ConnectBtn href="">
            <div className="icon-container">
              <MapPin color="#64ffda" size={18} />
            </div>
            <div className="link-container">
              <span>location</span>
              <h1>San Francisco, CA</h1>
            </div>
          </ConnectBtn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <SubConnectBtn>
              <LuGithub className="icon" />
            </SubConnectBtn>
            <SubConnectBtn>
              <LuLinkedin className="icon" />
            </SubConnectBtn>
            <SubConnectBtn>
              <LuTwitter className="icon" />
            </SubConnectBtn>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            height: "fit-content",
            backgroundColor: "#0d1c37",
            border: "1px solid #23355499",
            borderRadius: "12px",
            padding: "40px",
          }}
        >
          <form action="">
            <FormInputContainer>
              <FormLabel htmlFor="">your name</FormLabel>
              <FormInput
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
              />
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="">email address</FormLabel>
              <FormInput
                type="text"
                name="name"
                id="name"
                placeholder="john.doe@example.com"
              />
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="">message</FormLabel>
              <FormTextArea
                name="name"
                id="name"
                placeholder="Hello Alex! I am looking for a frontend developer to help build out a new SaaS product..."
                rows={5}
              />
            </FormInputContainer>
            <SendMessageBtn>
              Send Message <Send color="#0a1929" size={16} />
            </SendMessageBtn>
          </form>
        </div>
      </div>
    </section>
  );
}
