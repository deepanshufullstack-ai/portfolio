"use client";

import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";

import { Mail, MapPin, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  ConnectBtn,
  ContactContent,
  ContactInfo,
  ContactSection,
  FormContainer,
  FormInput,
  FormInputContainer,
  FormLabel,
  FormTextArea,
  SendMessageBtn,
  SubConnectBtn,
  SubConnectBtnContainer,
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
    <ContactSection id="contact" ref={ref}>
      <ContactContent>
        <ContactInfo>
          <span>04. whats next</span>
          <h1>Lets build something together.</h1>
          <p>
            Whether you have a specific project in mind, an exciting
            opportunity, or just want to connect — my inbox is always open. Ill
            try my best to get back to you!
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
          <SubConnectBtnContainer>
            <SubConnectBtn>
              <LuGithub className="icon" />
            </SubConnectBtn>
            <SubConnectBtn>
              <LuLinkedin className="icon" />
            </SubConnectBtn>
            <SubConnectBtn>
              <LuTwitter className="icon" />
            </SubConnectBtn>
          </SubConnectBtnContainer>
        </ContactInfo>
        <FormContainer>
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
        </FormContainer>
      </ContactContent>
    </ContactSection>
  );
}
